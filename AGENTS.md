# Agent Instructions: EB-1A RFE Response Drafting

## What This Repo Is

This repo is for drafting an **EB-1A RFE response letter** for **Yu Wang, Ph.D.**, a transportation engineering researcher working as a Lead Autonomy Engineer at May Mobility.

**Background:**

- An original EB-1A petition (Form I-140) was submitted. The petition letter draft is in `context/PL_EB1A_YuWang_V3.docx.md`.
- USCIS issued a **Request for Evidence (RFE)**. The officer's specific concerns are documented in `context/officer_targeted_issues_in_rfe.md`.
- USCIS **already accepted** two out of three criteria: **judging** and **authorship**.
- The RFE targets one remaining criterion: **original contributions of major significance**, plus a **final merits** review.
- The RFE response is a LaTeX file at `latex/rfe_response_template.tex`, which this agent helps to draft and fill in.
- The overall section structure of the response is outlined in `response_structure.md`, but **do not rely on it for specific evidence or content within each section** — the detailed evidence claims in that file may be inaccurate or outdated. Individual section drafts live in `sections/`.

---

## Core Strategy (Simplified)

The officer's central concern is:

> *"You showed publications, citations, and support letters. But USCIS needs independent, objective, documentary evidence that your specific personal work was original and made a major impact on the field."*

Our response answers this by doing the following five things:

### 1. Two Technical Contributions, Not "Publications"

We organize the entire response around **two concrete technical contributions** — not around papers, citation counts, or general field importance:

- **Contribution 1:** A way to model and predict how human drivers behave around autonomous vehicles (stochastic car-following, controlled field experiments, mixed-traffic data).
- **Contribution 2:** Methods to help autonomous vehicles plan and control their movement safely and efficiently in mixed traffic (trajectory optimization, proactive control, reinforcement learning).

These two form a coherent arc: first understand human-driver behavior around AVs, then plan AV movement accordingly.

### 2. Publications Are the Vehicle, Not the Contribution

We must draw a clear line: papers *disclosed* the work; the *contributions* are the underlying models, datasets, experiments, methods, and findings themselves. This directly answers the officer's concern that authorship and original contributions are separate criteria.

### 3. Proof Comes from Independent Use, Not Citations

The officer explicitly said that citation counts and support letters are not enough. So we lead with **objective evidence that others actually used the work**:

- Did researchers extend the method into new experiments?
- Did government reports use the data or model for simulation?
- Did industry projects rely on the work as a benchmark?
- Did the work become part of federal or international agency documents?

Every piece of evidence answers: *who used it, what exactly they used, and why that use proves the work matters.*

### 4. Agency-by-Agency Rebuttal

The officer specifically named several agencies (FHWA/USDOT, Florida/CUTR, Texas/TxDOT, Virginia/VTRC, European Commission) and said claims about them lacked objective proof. We answer with a **direct table** mapping each agency to the specific document and evidence that proves use.

### 5. Final Merits Are Cumulative

Even after proving the third criterion, we must show that the *totality* of the record (accepted criteria + new evidence + cross-sector recognition) places the beneficiary at the very top of the field. This is the final section of the response.

---

## Writing Style Rules

### Use Plain, Non-Academic English

USCIS officers are not transportation engineers. Every technical term must be explained in simple language. For example:

| Academic Term | Plain-English Explanation |
|---|---|
| Stochastic car-following model | A model that accounts for uncertainty and variation in how drivers follow each other, rather than assuming all drivers behave the same way |
| Trajectory optimization | Choosing a vehicle's speed and path over time to improve safety, travel time, fuel use, and comfort |
| Reinforcement learning | An AI method where a system learns by trying actions and getting feedback on what works |
| Mixed traffic | Roads where autonomous vehicles and human-driven vehicles share space and interact |
| Proactive longitudinal control | Controlling a vehicle's forward motion in advance to prevent disruptions from nearby human drivers |
| Benchmark | A reference method or dataset that others use to test whether their own systems work well |

**Rule:** Whenever you introduce a technical term, define it immediately in parentheses or in the next sentence using everyday language.

### De-Emphasize Citations, Emphasize What Was Done With the Work

- ❌ "My paper has been cited 50 times."
- ✅ "FHWA researchers used my field data to calibrate their mixed-traffic simulation tool."

- ❌ "This paper received high citation prominence."
- ✅ "A research group in the Netherlands extended my experiment design to study AV-human interaction at T-intersections."

- ❌ "My work is widely cited in prestigious journals."
- ✅ "Tsinghua University researchers adopted my modeling framework as the basis for their lane-changing safety algorithms."

The question is always: **what did someone actually build, test, calibrate, design, or evaluate using my work?**

### Don't Overclaim

- Don't say "adopted by the government" unless you have the specific government document.
- Don't say "commercially deployed" unless you have proof of deployment.
- Don't say "patents prove major significance" — patents are *corroborating* evidence that the work is translatable into real technology, not standalone proof of impact.
- Don't say "my field is important" — the officer explicitly rejected field-importance arguments.

Instead, be precise: *used, relied upon, extended, benchmarked against, built upon, applied in.*

### Support Letters Come Last

Expert letters are used to **explain** the objective evidence, not to **replace** it. The structure for each contribution is:

1. What I created (plain English).
2. My personal role (I did X, not "the team").
3. Objective documentary evidence (reports, papers, project documents showing independent use).
4. Why that use proves major significance.
5. Expert letter explaining what the objective evidence means, if helpful.

### First-Person Voice

Use "I," "my," and "me." The response is written in the beneficiary's voice.

## Key Files

| File | Purpose |
|---|---|
| `latex/rfe_response_template.tex` | Main LaTeX template — the output being drafted |
| `response_structure.md` | Overall section outline only; specific evidence within may be inaccurate — do not use as an evidence reference |
| `context/officer_targeted_issues_in_rfe.md` | Officer's specific concerns, paraphrased and analyzed |
| `context/PL_EB1A_YuWang_V3.docx.md` | Original petition letter (for reference) |
| `sections/` | Individual section drafts that feed into the main template |
