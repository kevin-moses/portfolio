## Decoding complex oncology logic to unlock insights for four million+ patients

![Editing a rule in Dynamic LOT](dlot_1.png)

## Overview

Our team built a production-grade internal tool at Flatiron Health empowering non-technical experts and engineers to view, edit, and
validate complex oncology "line of therapy" (LOT) rules outside of raw Python code using natural language. The app immediately
hooks updated rules into Flatiron’s data workflows, allowing oncologists to understand clinical guidance changes to patient cohorts
at scale and in depth.


The tool was a massive success, cutting new rule creation time from 1-2 months to less than a week and reducing rule modification
time from 1 month to approximately 1 hour. Dynamic LOT’s efficiency and scalability directly enabled the integration of new AIdriven
workflows, leading to $34 million in revenue. It is now used by all projects at Flatiron and is embedded in complex LOT
data generation for all 4 million+ patients in the EHR network.


As the Lead Engineer, I drove this project from concept to production. I prototyped the core UI concept myself, designed the
backend architecture, and led the full-stack development of its most critical features, including the rule editor, comparison/diffing
view, and the secure validation workflow.


## Motivation

In oncology, “lines of therapy” refers to the sequence of different treatments a patient receives during their treatment journey; first-line is the initial set of treatments (IV or oral drugs, chemotherapy, etc), and if it stops working or causes severe side effects, the patient moves to a second-line treatment, and so on. Part art and part science, institutions struggle to rigidly enforce these rules because there is no universal, standardized definition, making it difficult to classify complex "real-world" scenarios like maintenance therapy, treatment interruptions, or combination treatments in a consistent way.

![A Line of Therapy Chart showing a sample patient's treatment journey](dlot_2.png)


To calculate LOT for a given patient, Flatiron uses complex business rules derived from FDA guidelines and real-world evidence, housed in a sprawling Python codebase across multiple thousands of lines of code to process the patient’s EHR and unstructured data.

This created a severe dependency bottleneck. Critical oncology treatment rules were hard-coded directly into our Python services, meaning any change required a full software development cycle, plus another cycle of clinical review for validation. This crippled our ability to adapt to new treatments or research findings, frustrating domain experts and slowing down business-critical work.

Dynamic LOT’s objective was to decouple clinical logic from engineering, placing rule management directly into the hands of clinical experts. The primary audience was our non-technical Research Oncologists (ROs) and Product Managers. However, the tool's clarity made it an indispensable utility for Engineers too, who now use it to rapidly build and validate complex logic with ROs
.
This project required deep, continuous collaboration within a cross-functional team. The primary constraint was the immense technical challenge of translating arcane, deeply nested Python code into an intuitive, safe, and secure interface for non-technical users.

## Technical Overview

As the Lead Engineer, I drove the project's technical vision and execution. I architected the full-stack solution, prototyped the foundational UI/UX, and implemented the production code for the rule editor, visual diffing, and the entire backend evaluation service. I also authored the comprehensive design documents for the secure validation and approval workflow.

Using a Python introspection library, I converted each disease's rule set from code to a serializable YAML file. I then provided a prototype to add thorough descriptions and parameters to each rule, converting the rule object into natural language for the UI. Since these descriptions were parameterized, users could modify them and deserialize them back into executable code.

Using this foundation, we enhanced LOT rule changes from complicated code modifications to natural language updates done with version management. I led the implementation of the rule change workflow, where oncologists could create rule set drafts containing modifications, comparing them directly to the active configuration.

We also needed a quick way to validate changes against clinical guidance and ensure correct Real-World Evidence (RWE) data correctness. To this end, I developed a fully asynchronous background evaluation process in Celery. This process deserialized both the active and draft rule sets, hooked into Flatiron’s data pipelines to generate LOT, and compared the results for each rule set.

![dlot-3](dlot_3.png)

I put on my data scientist hat to help generate charts showing specific changes by line number, patient, and type of treatment, as well as generating Kaplan-Meier overall survival curves, showing probabilities of mortality over time and defining their statistical significance. Using Highcharts in React, users could go from a cohort-level (tens of thousands of patients) overview, click specific parts of the chart they were interested in, and have a sample of those patients added to a review panel, allowing them to drill down into individual patient charts. Approval of the draft was also gated by Role-Based Access Control (RBAC), with only specific groups of Flatiron employees able to approve new drafts. 

###  Skills
- Full-Stack Development: (Python, TypeScript, React, Celery, Asynchronous Task Queues)
- System Architecture: (Microservices, Distributed Systems)
- UI/UX prototyping
- Data Visualization (Highcharts), DevOps (Kubernetes)

![dlot-4](dlot_4.png)
![dlot-5](dlot_5.png)

## Reflection
I loved working within an interdisciplinary group to bring this project to life, especially collaborating with oncologists to figure out the limits of what our code could do, and how to best empower them to use their clinical expertise to drive forward progress at Flatiron. The “design feel” of working iteratively to define a problem, strategically iterate on a solution, take constructive feedback, and build on each new feature led to immense growth for me as an engineer and as a general problem solver. 

I learned that the greatest challenge in a complex domain is often not the code itself, but building a common language for a cross-functional team. My initial prototype, which translated raw Python into human-readable descriptions, became that language. It was the key that unlocked collaboration between engineers, designers, and oncologists. 

I also gained deep experience in designing for high-stakes environments, where a user-made change could impact millions of patient records. This forced me to build security and governance (like Role-Based Access Control) into the tool's DNA from day one, rather than as an afterthought. Version control, as another example, was something I learned as a matter of course from being a software engineer and using Git, but this project forced us to take the same concept and apply it to a different domain (cancer rule sets) with a completely different user base (oncologists, who might need to undo changes); this enabled me to consider features like rolling back changes, deprecating drafts, and communicating changes broadly.

