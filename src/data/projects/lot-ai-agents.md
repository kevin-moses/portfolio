## Overview

As a followup to Dynamic Lines of Therapy, our team is developing AI-powered agent  that evolved from one of my hackathon prototypes into a comprehensive, production-grade system for clinical and engineering analysis. This system is designed to answer two of our most critical and nuanced questions: “Explain why X happened for this patient” and “Find the number of patients who had X happen”, where X could be metastasis, surgery, a switch in medications, or other clinically relevant events.

The initial prototype, which I built, proved an agent could autonomously validate clinical data, flagging invalid patient charts with almost perfect accuracy and no false positives.

As the project lead and architect, I then designed the full-scale, production-level architecture to move far beyond the simple prototype. Our design is a sophisticated, multi-specialist system orchestrated by a Pydantic Graph state machine. This enables stateful, human-in-the-loop workflows, allowing the agent to pause, ask clarifying questions ("which biomarker is relevant?"), and give evidence with reasoning.

![lotai-1](lotai_1.png)

## Motivation

This project tackles two distinct, high-stakes problems:

1. For Clinical Experts: Our "Line of Therapy" (LOT) rules are incredibly complex. After any rule change, Research Oncologists (ROs) had to manually review countless charts to find edge cases—a slow, grueling process that was a "constant delivery risk" to our data quality.
2. For Engineers: Our LOT Python codebase is a multi-thousand line beast. It’s difficult for new engineers to learn and so large that it causes “context rot” in LLMs, breaking all standard AI-assisted debugging tools on the market.

The objective was to build a single, reliable system that could automate chart review for ROs and serve as an AI debugging partner for engineers.


![lotai-2](lotai_2.png)

## Technical Overview

I’ve been responsible for the project's technical lifecycle, from ideation to scalable system design.

*Phase 1: The Hackathon Prototype*

I began building a lightweight agentic workflow by designing a zero-shot Chain-of-Thought (CoT) prompt that forced the LLM to follow a specific reasoning process. The agent's power came from two tools I implemented for it: compare_rules (to find the "diff" in the rules) and investigate_line_differences (to see the "effect" on a patient). This POC proved the core concept was viable.

*Phase 2: The Production System Architecture*

Recognizing the POC's limitations, I then designed the complete, production-grade architecture. This system is not a single agent but a stateful, orchestrated workflow managed by a Pydantic Graph. My design includes:
A Planning Agent that first classifies a user's question (explain_one vs. find_many) and generates a multi-step execution plan.
A team of "Specialists" that execute each step. I designed the Rule Analysis Specialist based on my RAG research (using a hybrid Neo4j/ChromaDB approach) to fetch code details and clinical guidance over the 700k-token codebase.
A Clarification Specialist that identifies ambiguous terms and a Conversation Manager that persists the workflow state to PostgreSQL. This combination is what enables the critical human-in-the-loop capability, allowing a user to answer a clarifying question and have the agent resume from the exact point it paused.

Hard skills: System Design (Multi-Agent, Orchestration), AI Agent Design (Agentic Workflows), Stateful Workflows (Pydantic Graph), Prompt Engineering (Chain-of-Thought), Retrieval-Augmented Generation (RAG) Architecture, Vector Databases (ChromaDB), Knowledge Graphs (Neo4j), Prototyping (Python).

![lotai-3](lotai_3.png)

## Reflection

This project gave me hands on training with AI agents, and showed their severe limitations. The real challenge was working around this and designing a deterministic system with a separation of concerns to minimize LLM hallucination. Our design is more successful because the Rule Analysis Specialist only worries about code, the Clarification Specialist only worries about language, and the Pydantic Graph only worries about state.

I also learned how to safely utilize AI by building deterministic tools for it to use, ones that can also mask patient data for security. My compare_rules tool from the POC was the seed for this idea. The entire production architecture is built on making the non-deterministic LLM reliable by giving it a structured, predictable environment to operate in. I loved moving from a scrappy prototype to designing a robust, production-ready system that could solve a real-world user problem at scale.