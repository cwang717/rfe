# Section 4. Contribution 1: Modeling and Predicting Human Driving Behavior Around Autonomous Vehicles in Mixed Traffic

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

This contribution is not merely “traffic simulation” or “traffic prediction” in general. The specific contribution is narrower: **I helped the field model and predict human-driver behavior in the presence of autonomous vehicles, especially when that behavior is uncertain, affected by trust in AVs, and difficult to generalize from limited data.**

I advanced this contribution in four connected ways.

First, I created a modeling foundation for uncertain human following behavior. Instead of treating human drivers as if they always follow a fixed rule, my work modeled human car-following behavior as uncertain and variable. This matters because real drivers do not respond identically to the same vehicle ahead. By developing a stochastic car-following framework, I provided a way to analyze how small uncertain reactions by individual drivers can spread through a line of vehicles and affect traffic stability. This framework gives researchers and engineers a more realistic way to represent human behavior, which is especially important in mixed traffic where human drivers interact with autonomous vehicles.

Second, I helped provide real-world evidence for the specific mixed-traffic situation where a human-driven vehicle follows an autonomous vehicle. This is important because the behavior of a human driver around an AV cannot be safely assumed. A driver may trust the AV more, distrust it, or behave no differently. Through controlled field experiments, my work helped show that human drivers’ responses depend not only on the actual movement of the lead vehicle, but also on whether the lead vehicle is recognizable as an autonomous vehicle and how much the human driver subjectively trusts AV technology. This supplied the field with evidence that mixed-traffic models should not simply copy models developed for ordinary human-driven traffic.

Third, I helped extend this line of work from simple following behavior to broader vehicle-interaction prediction. In real traffic, an autonomous vehicle must anticipate not only the vehicle directly in front of it, but also nearby vehicles whose movements may affect the future path of the target vehicle. My work helped develop an interaction-aware prediction approach that identifies which surrounding vehicles matter most for predicting a vehicle’s future movement. This further supports mixed-traffic deployment because an autonomous vehicle must understand and predict the behavior of nearby human drivers before it can make safe and timely planning decisions.

Fourth, I helped address the practical problem that mixed-traffic and autonomous-driving data are often limited, fragmented, or specific to one location. A prediction model trained on one market or driving environment may not directly transfer to another market. My work therefore contributed to methods for adapting prediction models across different domains, so that knowledge learned from one dataset or environment can be reused more efficiently when data in the new environment are limited. This is particularly important for autonomous-driving deployment because companies and researchers cannot always collect or freely transfer large datasets across cities, countries, or operating conditions.

The originality of my contribution lies in connecting these pieces into one practical foundation for mixed traffic. I did not merely study traffic in a general sense. I addressed a specific missing link in autonomous-vehicle deployment: **how to model, measure, predict, and generalize human driving behavior around autonomous vehicles.**

This contribution is original because prior work often treated human driving behavior as deterministic, lacked controlled field evidence for human-following-AV behavior, focused on simpler traffic settings, or assumed that prediction models trained in one environment could be reused without addressing domain differences. My work helped move the field toward a more realistic approach: human drivers are uncertain; their behavior around AVs can change when the AV is recognizable; complex traffic prediction must consider interactions among multiple vehicles; and prediction models must be adaptable when mixed-traffic data are scarce.

The publications, datasets, models, and patents discussed below are therefore not presented as publications alone. They are evidence of the underlying contribution: a set of original methods and empirical findings that helped the field better understand and predict human-driver behavior in mixed AV-human traffic.
