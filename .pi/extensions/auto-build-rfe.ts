import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import * as path from "node:path";

const execAsync = promisify(exec);

const TARGET_FILE = "latex/rfe_response_template.tex";

export default function (pi: ExtensionAPI) {
  pi.on("tool_result", async (event, ctx) => {
    // Only react to edit/write tools that touched our LaTeX template
    if (event.toolName !== "edit" && event.toolName !== "write") return;
    if (event.isError) return;

    const inputPath = (event.input as any)?.path;
    if (!inputPath) return;

    // Normalize to catch both relative and absolute references to the target
    const resolvedInput = path.resolve(ctx.cwd, inputPath);
    const resolvedTarget = path.resolve(ctx.cwd, TARGET_FILE);
    if (resolvedInput !== resolvedTarget) return;

    const compileScript = path.resolve(ctx.cwd, "compile_rfe.sh");

    try {
      ctx.ui.setStatus("build", "Building RFE PDF...");
      const { stderr } = await execAsync(`bash "${compileScript}"`, {
        cwd: ctx.cwd,
      });
      if (stderr) {
        ctx.ui.notify("RFI PDF built with warnings", "warning");
      } else {
        ctx.ui.notify("RFI PDF built successfully", "info");
      }
    } catch (err: any) {
      ctx.ui.notify(`RFI PDF build failed: ${err.message}`, "error");
    } finally {
      ctx.ui.setStatus("build", "");
    }
  });
}
