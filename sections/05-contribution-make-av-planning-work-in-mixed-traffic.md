# Section 5. Contribution 2: Autonomous-Vehicle Planning and Control for Real-World Mixed Traffic

## Technical Scope

Trajectory optimization, learning-based motion planning, and proactive vehicle control methods that help connected and autonomous vehicles operate safely and efficiently around human drivers at road segments, intersections, and roundabouts.

## 5.A. Problem Before My Work

Autonomous and connected vehicles must operate in mixed traffic, where human-driven vehicles and automated vehicles interact with each other. This is not only a vehicle-control problem. It is also a human–machine interaction problem: human drivers may change their behavior when they see, follow, cut in front of, or negotiate space with an automated vehicle. Therefore, a deployable planning and control method must account for both the automated vehicle’s own trajectory and the human driver’s response to that trajectory.

Before my work, the field faced three related gaps.

First, trajectory planning and control methods for connected automated vehicles had not been systematically organized around the mixed-traffic interaction problem. Classical trajectory optimization research studied how to improve safety, travel time, fuel or energy use, and comfort. Learning-based autonomous-driving research studied how vehicles can make data-driven motion decisions. Traffic-flow research studied congestion, oscillation, and system-level traffic impacts. However, these research streams were often separated. As a result, the field lacked a clear framework for understanding how optimization-based and learning-based planning/control methods should be evaluated when an automated vehicle must interact with human drivers and affect the surrounding traffic stream.

Second, many existing methods were developed for simplified road segments or idealized traffic settings and could not be directly applied to complex roadway structures. At signalized intersections, vehicles must coordinate with traffic signals, stopping behavior, acceleration and deceleration patterns, and infrastructure guidance. At roundabouts, vehicles must negotiate merging, yielding, timing, and circulating traffic. In these settings, human–AV interaction is especially important because small differences in vehicle behavior can affect safety, delay, fuel consumption, and traffic smoothness. Therefore, planning/control methods needed to be adapted to these structure-specific interaction problems rather than assumed to work automatically across all traffic environments.

Third, earlier AV/CAV planning and control methods often treated human-driven vehicles as external disturbances that the automated vehicle should avoid or react to. But in mixed traffic, a connected or automated vehicle can do more than react. Through its own longitudinal behavior—such as adjusting speed, creating gaps, or smoothing traffic flow—it can influence human drivers’ lane-change decisions and reduce traffic disruption before it fully develops. The field therefore needed proactive control methods that could manage or prevent disruptive human-driver behavior, rather than merely respond after a cut-in or lane-change disturbance had already occurred.

In plain English, the problem was this: real mixed traffic is an interaction system. Automated vehicles do not move in isolation. Their planning and control decisions affect human drivers, and human drivers’ responses affect safety, efficiency, comfort, fuel/energy use, and congestion. My work addressed how to design optimization- and learning-based trajectory planning/control methods for this human–AV interaction environment.

For clarity, the key terms are as follows:

* **Trajectory optimization** means selecting a vehicle’s speed and path over time to improve safety, travel time, fuel or energy use, and passenger comfort.
* **Learning-based motion planning** means using data-driven or AI methods to help a vehicle make driving decisions.
* **Human–AV interaction** means the way human drivers and automated vehicles affect each other’s behavior in mixed traffic.
* **Proactive longitudinal control** means controlling a vehicle’s forward motion in advance to manage or prevent human-driver disruption.
* **Deployment constraint** means a real-world limitation, such as uncertain human behavior, variable input size, missing data, infrastructure constraints, computation time, or safety requirements.

## 5.B. What I Created and Why It Was Original

My contribution is not the broad field of autonomous vehicle planning and control. My contribution is narrower and more specific: **optimization- and learning-based trajectory planning/control for mixed traffic under human-driver interaction, roadway-structure constraints, and proactive disruption management.**

I created and helped develop a connected body of work that moved AV/CAV trajectory planning and control from idealized vehicle motion toward deployable mixed-traffic interaction methods. This contribution had three parts.

### 1. I helped create a systematic framework connecting trajectory optimization, learning-based planning, and mixed-traffic human–AV interaction.

In my first-authored review paper, *Review of trajectory optimisation for connected automated vehicles*, I organized the emerging field of CAV trajectory optimization and clarified the practical tradeoffs among safety, efficiency, fuel/energy use, comfort, computation, and implementation feasibility.

In *Trajectory optimization for a connected automated traffic stream: Comparison between an exact model and fast heuristics*, I helped address a practical implementation issue: exact optimization can produce high-quality trajectories but may be computationally expensive, while fast heuristic methods are more practical but must be evaluated carefully. This work helped clarify how trajectory optimization could become both technically reliable and computationally feasible for connected automated traffic streams.

In *Review of learning-based longitudinal motion planning for autonomous vehicles: research gaps between self-driving and traffic congestion*, I further connected trajectory planning with learning-based AV decision-making and traffic-flow impacts. This work identified a key gap between self-driving research, which often focuses on the ego vehicle’s motion, and transportation-engineering research, which evaluates how vehicle decisions affect congestion, surrounding vehicles, and system-level traffic performance.

Together, these works helped establish a systematic planning/control perspective for mixed traffic: an AV/CAV trajectory should not be evaluated only by whether the automated vehicle completes its own maneuver, but also by how it interacts with human drivers and how it affects traffic safety, smoothness, efficiency, and energy performance.

This was original because it connected research streams that were often treated separately. I helped bridge optimization-based CAV trajectory control, learning-based AV motion planning, and traffic-flow-aware evaluation into a more deployable mixed-traffic framework.

### 2. I helped develop trajectory planning/control methods for structure-specific interaction environments, including signalized intersections and roundabouts.

My work also addressed the fact that mixed-traffic interaction is not the same across all roadway environments. Certain roadway structures create special interaction problems that require dedicated planning/control methods.

In *A trajectory smoothing method at signalized intersection based on individualized variable speed limits with location optimization*, I helped develop a method to smooth vehicle trajectories through signalized intersections. The method addressed not only what speed guidance should be given, but also where individualized variable speed limit control should be located. This helped reduce unnecessary braking, acceleration, delay, and fuel consumption in an infrastructure-constrained environment.

In *Cooperative roundabout control strategy for connected and autonomous vehicles*, I helped extend cooperative control to roundabouts, where vehicles must coordinate entry, circulation, yielding, and timing. In this setting, safe and efficient operation depends on managing interactions among multiple vehicles under geometric constraints.

These works were original because they did not assume that a generic trajectory-control method could be directly transferred to all road environments. Instead, they addressed how planning/control should be adapted to specific roadway structures where vehicle interaction, infrastructure, and traffic geometry jointly determine performance.

### 3. I helped develop proactive control methods that use CAV behavior to manage or prevent disruptive human-driver behavior.

A central part of my contribution was addressing human-driver disruption directly.

In *Proactive longitudinal control to manage disruptive lane changes of human-driven vehicles in mixed-flow traffic*, *Proactive longitudinal control to preclude disruptive lane changes of human-driven vehicles in mixed-flow traffic*, and *Proactive longitudinal control of connected and autonomous vehicles with lane-change assistance for human-driven vehicles*, I helped develop methods for connected and automated vehicles to proactively adjust their longitudinal motion around lane-changing human-driven vehicles.

The original idea was that a CAV should not simply react after a human driver cuts in or creates a traffic disturbance. Instead, the CAV can act before the disruption fully develops. It can adjust its speed, create safer gaps, assist a human-driven vehicle’s lane change when appropriate, or reduce the likelihood that a disruptive lane change will damage traffic flow.

This reframed the role of the CAV in mixed traffic. The vehicle is not merely an automated agent optimizing its own path. It is also a controllable participant in a human–machine traffic system. By choosing its own longitudinal behavior, the CAV can influence human-driver behavior and improve the overall traffic outcome.

### Summary of Originality

Taken together, these works created a focused contribution: **Practical Planning and Control for Autonomous Vehicles in Mixed Traffic.**

The originality was not that I worked on autonomous vehicle planning/control generally. The originality was that I addressed the practical mixed-traffic version of the problem: how automated and connected vehicles can plan and control trajectories when human drivers interact with them, when intersections and roundabouts create special interaction constraints, and when CAVs can proactively influence human-driver behavior to improve traffic safety, smoothness, efficiency, and energy/fuel performance.

The papers are the vehicles through which the contribution was reported. The contribution itself is the set of methods, frameworks, and technical findings that helped make AV/CAV trajectory planning and control more realistic and deployable for mixed traffic.


### Evidence Map

| Category                                | Evidence and Significance                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Framework extension                     | **Li et al. (2022), Exhibit R1-3.** Used my first-authored *Review of trajectory optimisation for connected automated vehicles* as part of the technical foundation for later lane-changing trajectory planning research that moved from ego-vehicle “self-optimum” planning toward “local-optimum” planning that accounts for surrounding vehicles.                                                                           |
| Public-sector / federal use             | **Federal Highway Administration project report — Soleimaniamiri et al. (2021), FHWA-HRT-21-068, Exhibit 10C-2, #2.** Cited my work *Trajectory Optimization for a Connected Automated Traffic Stream: Comparison Between an Exact Model and Fast Heuristics* in a federal CARMA proof-of-concept report involving trajectory smoothing, trajectory planning, trajectory control, signal optimization, and dynamic lane assignment. |
| National-laboratory technical extension | **Zhou et al. (2024), Oak Ridge National Laboratory, Exhibit R1-4.** Cited my proactive longitudinal control / disruptive lane-change control papers in later research on learning-based car-following control, behavior cloning, deep reinforcement learning, and generalizability under stop-and-go traffic.                                                                                                                 |
| Structure-specific extension            | **Zhuo et al. (2023), Nanyang Technological University, Singapore, Exhibit 10C-2, #9.** Used my *Cooperative Roundabout Control Strategy for Connected and Autonomous Vehicles* in later research on CAV platooning configurations at isolated roundabouts in mixed traffic.                                                                                                                                                        |
| Patent translation                      | **U.S. Patent No. 11,697,435 B1 — Hierarchical Vehicle Action Prediction, Exhibit R4-2.** Shows that my autonomous-driving prediction and interaction-aware planning work was translated into a protected technical invention for predicting hierarchical vehicle actions and supporting autonomous driving decisions in interaction-heavy scenarios such as merging and surrounding-vehicle behavior prediction.              |

### 5.D.1. Later researchers used my trajectory-optimization framework to move AV planning beyond ego-only motion optimization.

My trajectory-planning contribution addressed a practical gap in autonomous-vehicle research: many planning methods optimized only the subject vehicle’s own motion, without sufficiently considering how the planned trajectory affects surrounding vehicles, human-driver interaction, or system-level traffic performance. My first-authored review, *Review of trajectory optimisation for connected automated vehicles*, organized this emerging field and clarified that CAV trajectory planning should be evaluated across safety, efficiency, fuel and energy use, comfort, computation, traffic scenario, communication setting, and implementation feasibility.

Li et al. (2022) later used this research direction in their work on automatic lane-changing trajectory planning from “self-optimum” to “local-optimum.” That later work addressed a problem closely aligned with the gap I identified: an autonomous vehicle should not merely complete its own maneuver, but should plan in a way that reduces excessive impact on surrounding vehicles. Their study proposed a lane-changing trajectory-planning approach that considered the benefits of both the subject vehicle and neighboring vehicles.

This is significant because it shows that my first-authored trajectory-optimization review did not remain a general publication summary. It helped define a planning/control framework that later researchers used when developing more interaction-aware trajectory-planning methods. The later work reflects the same shift that my contribution advanced: from isolated vehicle motion to mixed-traffic trajectory planning where vehicle interaction, local traffic impact, and surrounding-driver response matter.

### 5.D.2. The FHWA CARMA report used my connected-traffic-stream trajectory-optimization work in a federal cooperative-automation context.

My contribution also reached public-sector and federal transportation research. The FHWA project report by Soleimaniamiri et al. (2021), *Cooperative Automation Research: CARMA Proof-of-Concept Transportation System Management and Operations Use Case 4 — Dynamic Lane Assignment*, cited my work *Trajectory Optimization for a Connected Automated Traffic Stream: Comparison Between an Exact Model and Fast Heuristics*.

This use is important because the FHWA report was not merely an academic paper. It was a federal project report concerning cooperative driving automation, the CARMA ecosystem, transportation systems management and operations, dynamic lane assignment, signalized corridors, and C-ADS-equipped vehicles. The report’s proposed framework included trajectory smoothing for cooperative automated driving system vehicles, along with signal and lane optimization and critical time-step estimation. My trajectory-optimization work was used in this context because it addressed a core deployment issue: exact optimization can improve trajectory quality, while fast heuristic methods are needed for real-time transportation operations.

This directly supports major significance. It shows that my optimization-based planning work was relevant to federal cooperative-automation research, not only to academic discussion. It also addresses the officer’s concern that agency-related claims should be supported by objective documentary evidence. The FHWA report provides independent documentation that my trajectory-optimization contribution became part of the technical foundation for public-sector cooperative-automation work involving trajectory planning, trajectory control, energy efficiency, throughput, and safety.

### 5.D.3. Later researchers extended my structure-specific interaction work to roundabout platooning and mixed-traffic operations.

Another part of my contribution was showing that mixed-traffic planning/control cannot be treated as one generic problem across all road environments. Roadway structures such as roundabouts, intersections, and merging areas create unique interaction patterns and require dedicated planning/control methods.

My paper *Cooperative Roundabout Control Strategy for Connected and Autonomous Vehicles* addressed this issue by proposing a hierarchical roundabout-control framework for CAVs. The framework separated flow-level performance objectives from vehicle-level safety constraints and included a roundabout flow control model, a merge-in decision model, and an in-roundabout virtual platoon control model. This structure was designed to improve roundabout performance while maintaining safety and computational tractability for real-time applications.

Zhuo et al. (2023) from Nanyang Technological University later used this work in their study of CAV platooning configurations at an isolated roundabout in a mixed-traffic environment. Their work examined maximum platoon size, platoon willingness, and platoon type, and evaluated how those configurations affected throughput and delay in mixed traffic. This later study extended the same structure-specific problem that my work addressed: how CAVs should operate in roundabouts where merging, yielding, circular movement, platoon formation, and traffic geometry jointly shape system performance.

This evidence supports major significance because later researchers did not use my roundabout-control work merely as a broad AV citation. They used it in the same specialized roadway environment—roundabouts—and extended the technical question to platoon configuration and mixed-traffic operations. This shows that my structure-specific planning/control contribution helped define a continuing research direction for CAV operation in complex roadway geometries.

### 5.D.4. My proactive mixed-traffic control work was used in later learning-based control research and further translated into a protected AV invention.

A central part of my contribution was the idea that a CAV should not merely react after human-driver disruption has already occurred. In my proactive longitudinal control papers, I helped develop methods for CAVs to adjust their own motion to manage or preclude disruptive lane changes by human-driven vehicles. This reframed the CAV as an active participant in a human–machine traffic system: by selecting its longitudinal behavior, the CAV can influence human-driver behavior and preserve smoother, safer mixed traffic.

Zhou et al. (2024), including researchers from Oak Ridge National Laboratory, later cited my proactive longitudinal control and lane-change interaction papers in research on learning-based car-following control. Their work studied behavior cloning, deep reinforcement learning, stop-and-go traffic, and generalizability of learning-based CAV control. This use shows that my proactive control work became part of the technical foundation for later learning-based CAV control research, particularly where training data, disturbance management, and mixed-traffic generalization are central concerns.

In addition to this independent technical use, Patent 2, *Hierarchical Vehicle Action Prediction*, provides translational evidence that my work was not limited to publication. The patent concerns predicting vehicle actions through a hierarchy of interconnected vehicle actions and using predicted surrounding-vehicle behavior to support autonomous driving decisions. This is closely related to interaction-heavy AV operation, including scenarios such as merging, yielding, stopping, and other surrounding-vehicle actions that an autonomous vehicle must anticipate before planning its own motion.

I do not present Patent 2 as third-party adoption evidence. Rather, it corroborates that my research direction produced concrete technical solutions capable of implementation in autonomous-driving systems. When considered together with the FHWA report and later technical papers by Li et al., Zhou et al., and Zhuo et al., Patent 2 further shows that my planning/control contribution was original, practical, and significant beyond publication alone. It connected optimization, learning, roadway-specific control, and vehicle-interaction prediction into deployable mixed-traffic autonomy methods.

## 5.E. Supporting Expert Letters

The expert letters submitted with this response should be read as explanatory corroboration of the objective evidence above, not as a substitute for that evidence. The expert letters help explain why those objective documents matter in the field and how they are connected to my specific contribution.

### Reinforcement-learning control under deployment constraints

Dr. Pawel Gora (Exhibit 2), Founder and CEO of the Quantum AI Foundation and an Intelligent Transportation Systems specialist at the University of Warsaw, explains the originality and practical significance of my reinforcement-learning work. As his original letter stated, I was "the first" to address the problem that real-world sensor inputs vary in size from moment to moment---a constraint that had kept most academic RL trajectory controllers from being useful outside research settings. By developing a method to handle variable input sizes, I eliminated an unrealistic assumption and produced a controller that outperformed the commercial Adaptive Cruise Control model deployed in production vehicles by 60%, making it "the new benchmark for subsequent research" in both academia and industry. Dr. Gora also independently confirms that my track record in reinforcement learning and trajectory optimization placed me in "the top percentage of researchers in the field," which is why he invited me to serve as an editor for the book "Artificial Intelligence in Transportation" published by CRC Press alongside world-leading experts. His letter helps explain why Zhou et al. at Oak Ridge National Laboratory built upon my RL-based proactive control framework---they were extending a method that had already demonstrated practical advantages over commercial technology.

### Trajectory optimization in federal and industry contexts

Dr. Amir Ghiasi (Exhibit 3), Senior Transportation Research Analyst at Leidos Inc., the largest U.S. federal government contractor in national security and health, explains the industry and federal-project significance of my trajectory-optimization work. As his original letter stated, my trajectory-optimization analysis was "a key foundation for us to design the concept of operations for cooperative automation for the Cooperative Automation Research: CARMA Proof-of-Concept" project---the same FHWA report discussed in the objective evidence above. He further explains that my optimization-based trajectories provided his team with reliable, technically grounded benchmarks for evaluating traffic-simulation tools, replacing the simplified rule-based speed profiles that commercial vendors typically supply. Dr. Ghiasi summarizes that my work "consistently bridge[s] the gap between academic innovation and practical engineering needs," a combination he describes as rare.

### Personal attribution

The employer statement further addresses personal attribution. Because many of the relevant works were developed in collaborative industry settings, this statement helps confirm that the contribution was personally mine rather than an undifferentiated team achievement, directly responsive to the RFE's concern that the record should identify my specific personal contribution.

### Cross-sector corroboration

The support letter from Gabrielle Pierre, Director for Strategy and Partnerships for the Georgia Network for Electric Mobility and organizer of the Autonomous Mobility panel at the 5th Annual E-Mobility Summit, independently confirms that a multidisciplinary summit spanning government, industry, academia, and economic development recognized my Contribution 2 expertise as uniquely suited to address real-world AV deployment questions. This letter has been discussed in the cross-sector evidence above.
