## Building a sunnier future for senior phone interaction

![sunny-2](sunny_2.png)

## Overview
Sunny is a voice-only mobile interface designed as an alternative (hopefully, sunnier) way to navigate a smartphone, designed  especially for seniors, but beneficial for anyone overwhelmed by screens. Using LiveKit for real-time speech and a lightweight reasoning agent, the app acts as a conversational layer on top of essential phone tasks. Users can speak naturally (“remind me about my pills,” “help me call my doctor,” “where’s the nearest DMV?”), and the system responds with streaming voice, performs tool-based actions like search, calendar updates, calling, or directions, and in a future state will guide the user through complex tasks with simple step-by-step voice instructions. The goal is to reduce cognitive load and bring warmth and accessibility back to everyday device use; the best UI is no UI.

## Motivation
This project grew from observing how modern mobile UX design often leaves seniors and many tech-fatigued adults disoriented. Despite accessibility features, most interfaces still assume comfort with scrolling, tapping, and constant visual engagement, which can easily lead to cognitive overload for users that aren’t digitally literate. I wanted to explore a future where the primary interaction model is spoken, ambient, and humane. The inspiration came from three places: researching how the seniors in like my mom use their phones, the realization that seniors prefer low-tech, voice solutions like phone calls, and the frustration I hear from caregivers who feel like they’re failing their elders. I aimed to build something that felt more like a helpful guide than an AI “persona”, and a tool that reduces friction in the real world for real people.

## Experience, Learning, and Skills
![sunny-1](sunny_1.png)
This ongoing build has been a crash course in designing an agent-driven mobile experience with strict iOS constraints. I initially started by conducting user research, asking a half dozen seniors about the pain points of using their phone and their digital habits. I then began work on a POC implementing streaming speech using LiveKit Cloud, connected Tavily for real-time search, am building tool integrations for reminders, calendar, SMS, and navigation like ride-share and public transit. I developed a simple orchestration layer that manages user state, partial transcriptions, and low-latency responses. I designed the voice interaction loop to feel natural, even when iOS permissions restrict background audio or app control. I also am exploring workflows like visual-guided “Duolingo-style” tutorials for phone usage and intuitive UI screens for steps requiring manual actions. 

## Reflection
What surprised me most was how challenging it is to maintain a sense of continuity in voice-driven interactions; humans expect responsiveness, memory, and emotional attunement even in short exchanges, which is partly why so few of my participants use Siri. The technical limitations of iOS forced creative solutions that ultimately made the experience more intentional. Early tests showed that users appreciated the calm, hands-free nature of the agent and preferred speaking to it over navigating visual menus. This project reinforced my belief that AI interfaces don’t need to be maximalist; they just need to reduce friction, create clarity, and meet people where they are. Sunny is as much a digital wellness experiment as it is a technical one, and it will hopefully evolve toward a more humane, low-pressure way of interacting with technology.




