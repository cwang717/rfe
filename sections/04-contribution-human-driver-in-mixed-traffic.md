# Section 4. Contribution 1: Human-Driver Behavior Around Autonomous Vehicles in Mixed Traffic

## 4.A. Problem Before My Work

Autonomous vehicles will not suddenly replace all human-driven vehicles. For many years, American roads will have mixed traffic: autonomous vehicles and human-driven vehicles sharing the same roads, responding to each other, and affecting each other’s safety and efficiency.

For autonomous vehicles to be safely deployed in this environment, the field must answer a practical question: **how will human drivers behave around autonomous vehicles, and how can that behavior be modeled and predicted?**

Before my work, this question had not been adequately answered.

First, many existing traffic models treated human drivers as if they reacted in a fixed and predictable way. In real life, human drivers do not behave that way. Some drivers are cautious, some are aggressive, some hesitate, and the same driver may behave differently under different conditions. A small reaction by one driver, such as braking slightly too late or leaving a larger gap, can spread backward through a line of vehicles and create stop-and-go traffic. The field needed a way to model this uncertainty, rather than assuming that human drivers always follow the same deterministic rule.

Second, the field lacked real-world evidence on how human drivers behave specifically when they follow an autonomous vehicle. This was a critical missing piece for mixed traffic. Researchers could model how a human driver follows another human-driven vehicle, and they could model how an autonomous vehicle follows another vehicle. But there was very limited controlled evidence on what happens when the lead vehicle is autonomous and the following vehicle is driven by a human. Before such evidence existed, many models had to assume that a human driver would treat an autonomous vehicle the same way as any other vehicle. That assumption was unproven.

Third, the problem becomes even more difficult in real urban traffic. On a simple road, a driver may mostly react to the car directly ahead. In congested urban traffic, however, a vehicle’s future movement may be affected by many surrounding vehicles, intersections, pedestrians, bicycles, buses, and frequent stop-and-go conditions. Therefore, mixed-traffic research needed more than a simple “one vehicle follows another vehicle” model. It also needed methods to predict how vehicles interact with multiple surrounding vehicles in complex traffic.

Fourth, mixed-traffic data are limited and difficult to generalize. Data collected in one city, one country, or one driving environment may not directly apply to another location because driving habits, traffic rules, road designs, and available data can differ. This creates a practical problem for autonomous-driving development: even if a prediction model works in one environment, it may not work well in another environment unless it can be adapted efficiently.

In short, before my work, the field lacked a connected foundation for understanding human behavior around autonomous vehicles: a way to model uncertain human following behavior, real-world data showing how humans actually respond to autonomous vehicles, prediction methods for complex vehicle interactions, and practical methods to adapt prediction models when data are limited or different across driving environments.

## 4.B. What I Created and Why It Was Original

My contribution is a framework for understanding, measuring, and predicting how human drivers behave around autonomous vehicles in mixed traffic.

This contribution is not merely “traffic simulation” or “traffic prediction” in general. Rather, my specific contribution is: **I helped the field model and predict human-driver behavior in the presence of autonomous vehicles, especially when that behavior is uncertain, affected by trust in AVs, and difficult to generalize from limited data.**

I advanced this contribution in four connected ways.

First, I created a modeling foundation for uncertain human following behavior. Instead of treating human drivers as if they always follow a fixed rule, my work modeled human car-following behavior as uncertain and variable. This matters because real drivers do not respond identically to the same vehicle ahead. By developing a stochastic car-following framework, I provided a way to analyze how small uncertain reactions by individual drivers can spread through a line of vehicles and affect traffic stability. This framework gives researchers and engineers a more realistic way to represent human behavior, which is especially important in mixed traffic where human drivers interact with autonomous vehicles.

Second, I helped provide real-world evidence for the specific mixed-traffic situation where a human-driven vehicle follows an autonomous vehicle. This is important because the behavior of a human driver around an AV cannot be safely assumed. A driver may trust the AV more, distrust it, or behave no differently. Through controlled field experiments, my work helped show that human drivers’ responses depend not only on the actual movement of the lead vehicle, but also on whether the lead vehicle is recognizable as an autonomous vehicle and how much the human driver subjectively trusts AV technology. This supplied the field with evidence that mixed-traffic models should not simply copy models developed for ordinary human-driven traffic.

Third, I helped extend this line of work from simple following behavior to broader vehicle-interaction prediction. In real traffic, an autonomous vehicle must anticipate not only the vehicle directly in front of it, but also nearby vehicles whose movements may affect the future path of the target vehicle. My work helped develop an interaction-aware prediction approach that identifies which surrounding vehicles matter most for predicting a vehicle’s future movement. This further supports mixed-traffic deployment because an autonomous vehicle must understand and predict the behavior of nearby human drivers before it can make safe and timely planning decisions.

Fourth, I helped address the practical problem that mixed-traffic and autonomous-driving data are often limited, fragmented, or specific to one location. A prediction model trained on one market or driving environment may not directly transfer to another market. My work therefore contributed to methods for adapting prediction models across different domains, so that knowledge learned from one dataset or environment can be reused more efficiently when data in the new environment are limited. This is particularly important for autonomous-driving deployment because companies and researchers cannot always collect or freely transfer large datasets across cities, countries, or operating conditions.

The originality of my contribution lies in connecting these pieces into one practical foundation for mixed traffic. I did not merely study traffic in a general sense. I addressed a specific missing link in autonomous-vehicle deployment: **how to model, measure, predict, and generalize human driving behavior around autonomous vehicles.**

This contribution is original because prior work often treated human driving behavior as deterministic, lacked controlled field evidence for human-following-AV behavior, focused on simpler traffic settings, or assumed that prediction models trained in one environment could be reused without addressing domain differences. My work helped move the field toward a more realistic approach: human drivers are uncertain; their behavior around AVs can change when the AV is recognizable; complex traffic prediction must consider interactions among multiple vehicles; and prediction models must be adaptable when mixed-traffic data are scarce.

The publications, datasets, models, and patents discussed below are therefore not presented as publications alone. They are evidence of the underlying contribution: a set of original methods and empirical findings that helped the field better understand and predict human-driver behavior in mixed AV-human traffic.

## 4.D. Objective Evidence of Adoption, Use, Extension, or Reliance

This subsection provides objective evidence that later independent users did not merely cite my work as background literature. Instead, they used my contributions as data, experimental design, empirical findings, methodological foundation, technical benchmark, or implementation basis. I separately discuss patents as translational and technical-implementation evidence, rather than characterizing them as third-party adoption.

### Evidence Map

| Category | Evidence and Significance |
| --- | --- |
| Industry adoption | **Royal HaskoningDHV (international engineering consulting firm) — Soni et al. (2022), Exhibit 10C-2, #7.** Extended my controlled human-following-AV experiment direction to new behavioral-adaptation studies involving gap acceptance, car-following, and overtaking. This shows industry, not only academic, adoption of the experimental protocol. |
| Public-sector use | **FHWA project report — Huang et al. (2021), including Qianwen Li from CUTR, Florida, Exhibit 10C-2, #1.** Used my mixed-traffic field-experiment evidence in government-related AMS / simulation work for mixed traffic and automated-driving systems. |
| Public-sector use | **European Commission / Joint Research Centre — Makridis et al. (2022), Exhibit 10C-2, #5.** Used my empirical findings on human-driver heterogeneity to support international public-sector analysis of stochastic traffic simulation. |
| Theory extension | **Mohammadian (2021), Queensland University of Technology, Exhibit 10C-2, #8.** Used my human-following-AV findings to motivate a behavioral continuum framework for mixed-traffic dynamics and safety. |
| Theory extension | **Ngoduy (2021), Monash University, Australia, Exhibit R1-1.** Built upon my stochastic car-following and stability-analysis framework in later stochastic traffic-flow theory. |
| Benchmarking | **Yang et al. (2025), Exhibit R1-2.** Used my transformer-based vehicle trajectory prediction work as a methodological comparison and future research benchmark in CAV/platoon prediction-control research. |
| Dataset use | **Public GitHub dataset: Field-Experiment-Data, Exhibit R1-5.** Made the underlying mixed-traffic experiment reproducible and usable by later researchers. |
| Patent translation | **U.S. Patent No. [Patent 1] — Intention Prediction in Symmetric Scenarios, Exhibit R4-1.** Shows that my autonomous-driving prediction work became a protected technical invention, not merely an academic article. |
| Patent translation | **U.S. Patent No. [Patent 3] — Reinforcement Learning Techniques for Network-Based Transfer Learning, Exhibit R4-3.** Shows technical implementation of my model-transfer work for autonomous-driving prediction systems. |

### 4.D.1. Industry practitioners adopted and extended my field-experiment protocol.

My field-experiment contribution addressed a specific gap in mixed-traffic research: before my work, researchers lacked controlled real-world evidence showing how human drivers behave when following an autonomous vehicle rather than another human-driven vehicle. My work provided both the experimental design and the empirical finding that human-driver response depends not only on the AV’s actual driving behavior, but also on whether the AV is recognizable to the human driver.

Royal HaskoningDHV, an international engineering consulting firm headquartered in the Netherlands with offices in 30 countries and more than 6,000 professionals worldwide, later used this same research direction as the basis for a controlled field test in the Netherlands. Their study did not merely cite my paper in passing. It extended the issue I investigated—human-driver behavioral adaptation when interacting with AVs—into additional interaction types, including gap acceptance, car-following, and overtaking. Their field test with 18 participants and a Wizard-of-Oz AV expanded the experimental scope from my original HV-following-AV setting to broader behavioral-adaptation scenarios.

This shows major significance because my contribution became part of the experimental foundation for later real-world AV-human interaction studies. Later researchers treated the question I opened—whether and how human drivers change behavior around AVs—as a research direction worth independently extending.

### 4.D.2. Government-related and public-sector researchers relied on my field-experiment findings for mixed-traffic modeling, simulation, and policy-relevant analysis.

My field-experiment contribution was also used beyond ordinary academic follow-up studies. The FHWA project report by Huang et al. (2021), including Qianwen Li from the Center for Urban Transportation Research in Florida, used my mixed-traffic field-experiment evidence in government-related analysis, modeling, and simulation work. This is important because it directly addresses the officer’s concern that government-agency-related claims should be supported by objective documentary evidence rather than recommendation letters alone.

The European Commission / Joint Research Centre evidence provides further independent public-sector reliance. Makridis et al. (2022) used my empirical findings in the context of characterizing driver heterogeneity within stochastic traffic simulation. This use is significant because the European Commission researchers were not simply discussing AVs in general; they used the type of human-driver heterogeneity revealed by my work to support a policy-relevant and simulation-relevant framework for understanding stochastic traffic behavior.

Together, these records show that my field-experiment contribution reached government-related and international public-sector research contexts. This is stronger than a citation-count argument because it shows that my work supplied usable empirical evidence for simulation, mixed-traffic modeling, and public-sector analysis.

### 4.D.3. Later researchers used my work as a methodological foundation for new traffic-flow theory and mixed-traffic safety research.

My work also influenced later theoretical development. Mohammadian (2021) used my field-experiment findings to explain why mixed-traffic models must account for human factors when conventional vehicles interact with CAVs. The thesis specifically relied on my finding that some human drivers maintain smaller gaps when following AVs, while others keep larger gaps because they do not trust automated driving. This use shows that my empirical finding helped motivate a broader behavioral-continuum framework for freeway traffic-flow dynamics and safety.

Separately, Ngoduy (2021) used my stochastic car-following and stability-analysis contribution in later traffic-flow theory. My stability-analysis work addressed a fundamental methodological gap: deterministic car-following stability tools could not adequately analyze stochastic human-driver behavior and stochastic traffic oscillations. Ngoduy’s later work on noise-induced instability in stochastic higher-order continuum traffic models built upon this research direction.

These examples show that my contributions were used at two different levels: empirical mixed-traffic behavior and mathematical traffic-flow theory. This supports major significance because the work did not remain confined to the original publications; it supplied concepts and methods that later researchers used to construct new models and research frameworks.

### 4.D.4. My prediction and transfer-learning contributions were used in later technical development and were further translated into protected technical inventions.

My later work on trajectory prediction also became part of subsequent technical development. Yang et al. (2025) used my transformer-based vehicle trajectory prediction study as a methodological comparison in later CAV/platoon-control research. The later study compared prediction approaches and discussed input-output time-window design in light of my transformer trajectory-prediction work. This shows that my prediction contribution was used as a technical reference and benchmark in later connected-vehicle control research, not merely as background literature.

In addition to independent third-party use, my patents provide separate translational evidence that my contributions were not merely academic papers. Patent 1, concerning intention prediction in symmetric scenarios, shows that my autonomous-driving prediction work was translated into a protected technical solution for a practical AV problem involving ambiguous or symmetric traffic interactions. Patent 3, concerning reinforcement learning techniques for network-based transfer learning, shows that my model-transfer research was also translated into a protected technical implementation for selecting transferable neural-network parameters.

I do not present these patents as third-party adoption evidence. Rather, they corroborate that my research produced concrete technical solutions capable of implementation in autonomous-driving prediction and transfer-learning systems. When considered together with the independent third-party use described above, the patents further support that my contributions were original, practical, and significant beyond publication alone.

## 4.E. Supporting Expert Letters

The expert letters submitted with this response should be read as explanatory corroboration of the objective evidence above, not as a substitute for that evidence. The expert letters help explain why those objective documents matter in the field and how they are connected to my specific contribution.

### Stochastic car-following modeling

Dr. Yang Zhou (Exhibit 1), an independent transportation-engineering scholar at Texas A&M University, explains the originality and significance of my stochastic car-following work. As his original letter stated---which the officer has already seen---my paper in *Transportation Science* represented "a fundamental theory breakthrough" and "the greatest advance" in modeling the complexity and uncertainty of real-world driving behavior. He explains that by formulating a generalized stochastic framework that could represent six distinct types of state-of-the-art car-following models, I provided a single analytical tool that outperformed them all, placing my work in "the top percentage in the field." This explains why later researchers such as Ngoduy built upon my stochastic framework in their own traffic-flow theory---they were extending a modeling approach that had demonstrated both generality and analytical power that deterministic alternatives did not offer.

### Field-experiment findings and AV-appearance evidence

Dr. Jianming Ma (Exhibit 4), Director of the Traffic Management Section in the Traffic Safety Division of the Texas Department of Transportation, explains the public-sector significance of my human-following-AV field experiment. As his original letter stated, my discovery "made it clear that federal, state and local transportation policymakers and regulatory agencies should consider regulations of AV appearance, which was never put on the table before." Dr. Ma also independently confirms that researchers at CUTR in Florida used my mixed-traffic field data to calibrate simulation tools for FHWA-sponsored AMS work, corroborating the public-sector reliance documented above.

### Personal attribution

The corresponding-author statement (Exhibit 12) further addresses personal attribution. Because some of the relevant works were collaborative, this statement helps confirm that the contribution was personally mine rather than an undifferentiated group achievement, directly responsive to the RFE's concern that the record should identify my specific personal contribution.

### Cross-sector corroboration

The support letters from Dr. Xiaowei (Tom) Shi and Dr. Qianwen (Cami) Li independently confirm that my Contribution 1 expertise was sought beyond publication---by government-facing officials evaluating AV deployment readiness and by an academic institution training the next generation of transportation researchers. These letters have been discussed in the cross-sector evidence above.
