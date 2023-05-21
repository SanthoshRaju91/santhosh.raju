---
layout: "../../layouts/BlogPostLayout.astro"
slug: mlops
title: What is MLOps
synopsis: MLOps is a process of automating Machine Learning using DevOps methodologies.
published: May 21, 2023
authorProfilePic: /authors/santhosh.raju.jpeg
tags:
  - Linux
  - Docker
---

The field of Machine Learning (ML) is advancing at an unprecedented pace, beyond what one could imagine. Every week, we witness new breakthroughs in LLMs (Large Language Models), Generative AI, and many other areas.

However, most organizations are not deploying ML systems to production at the same pace. In this blog post, as I explain what MLOps is, I will first delve into why the emergence of MLOps is a much-needed industry standard.

### Why Isn't Machine Learning 10x Faster?

Building ML systems involves various components, such as:

1. Data engineering.
2. Data processing.
3. Problem feasibility.
4. Business alignment.

One of the main issues is that the focus is often on code and technical details rather than solving the business problem. There is also a lack of automation and the prevalence of the HIPPO (Highest Paid Person's Opinion) culture.

If we observe carefully, much of ML is not designed to scale due to the following reasons:

1. They are not Cloud Native.
2. Models are trained using academic datasets and academic software packages.

These reasons hinder the faster deployment of ML models into production, which is why the emergence of MLOps is such a critical industry standard.

### What is MLOps?

To sum up MLOps in one line: "MLOps shares a lineage with DevOps." Think of MLOps as the process of automating Machine Learning using DevOps technologies.

The philosophy of DevOps emphasizes automation. There is a saying in the DevOps community: "If it is not automated, it's broken." The history of automation shows that humans are least valuable when performing repetitive tasks but are most valuable as architects and practitioners, utilizing technology.

To continue with the blog post, it would be better if I first explain what DevOps is and then discuss MLOps' shared lineage with DevOps

### DevOps and MLOps

DevOps aims to deliver secure software products with greater agility by facilitating collaboration between software development teams and operations teams, accelerating software delivery through automation, collaboration, constant feedback, and iterative improvements.

Building on Agile, Lean practices, and systems theory, DevOps focuses on incremental development and the rapid delivery of software.

A crucial factor determining the success of DevOps practices in a team/organization is maintaining a constant feedback loop and making iterative improvements. That's why DevOps is often visualized as an infinity loop, as feedback is collected at every stage of the DevOps cycle and used to drive iterative improvements.

<img src="/mlops/devops.jpg" alt="devops cycle" width="100px" height="100px" />

The benefits of DevOps include speed, reliability, scalability, and security, achieved through adherence to best practices:

1. **Continuous Integration (CI)**: CI involves the process of merging code into a source control repository that automatically checks the code's quality through testing.

2. **Continuous Delivery (CD)**: CD is the process of automatically testing and deploying code changes, either to a staging or production environment.

3. **Microservices**: Microservices are software services with distinct functionality and minimal dependencies.

4. **Infrastructure as Code (IaC)**: IaC involves checking infrastructure into a source code repository and deploying it via changes from that repository. IaC allows for idempotent behavior and ensures that infrastructure deployment does not require human intervention. A cloud environment defined entirely in code and checked into a source code repository is a good example of IaC.

5. **Monitoring and Instrumentation**: Monitoring and instrumentation involve collecting data about the behavior of applications running in production, enabling organizations to make informed decisions about software system performance and reliability.

6. **Effective technical communication**: This involves creating efficient, repeatable communication methods to provide feedback to each team.

7. **Effective technical project management**: This process can efficiently utilize human and technological solutions like ticketing systems and spreadsheets for project management. It also involves breaking down problems into smaller, discrete chunks of work to achieve incremental progress.

Among these, Continuous Integration (CI) and Continuous Delivery (CD) are two critical pillars of DevOps.

MLOps shares the same benefits as DevOps, as discussed above. With MLOps, not only do software engineering processes require full automation, but so do data and modeling processes.

Model training and deployment are additional responsibilities added to the DevOps lifecycle.

This embrace of automation has led to the emergence of new approaches, such as:

1. Data Versioning.
2. Initial prototyping of systems using AutoML.

These approaches have gained attention in various industries, with a wide variety of tools and services available from Cloud providers and startups, promising to capture the DevOps mindset.

Lastly, there is additional monitoring and instrumentation that takes into account new metrics like data drift—the delta between changes in the data since the last model training occurred. This metric helps determine if the model is functioning properly or if it's broken. The industry has witnessed the rise of observability, which captures these model metrics, enabling organizations to assess model performance in production.

As the industry moves towards AI & ML, it becomes crucial to understand the process of productionizing ML models. I hope this post has given you a good understanding and nudged you in the right direction to embrace MLOps and implement them in your teams.
