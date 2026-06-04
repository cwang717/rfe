# Section 5. Contribution 2: Making Autonomous Vehicle Planning Work in Mixed Traffic

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
