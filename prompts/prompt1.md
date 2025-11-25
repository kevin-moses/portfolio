PART A: Setup
I'm building my portfolio on this website. 

Start by installing everything you need to run this project via npx, vite, and deployed with netlify. 

Then, create a very basic landing page. Navy background, white sans serif text. 

Title: Kevin Moses
Underneath this, have a very simple animation. The subtitle animation should be a noun, then after three seconds, animate a strikethrough line through the word, fade it out, then fade in another word, cycling through the animation again (show for three seconds, strikethrough, fade out, then the next word)

subtitle words: [senior software engineer engineer, creative coder, chemical engineer, writer, researcher, bioinformatics developer, cat lover, son, human]

PART B: project list, hidden and visible by tags

I have a list of projects that I want to display on the portfolio. This is the list:
1. Memory Snowglobe
2. Dynamic Lines of Therapy
3. Thought Offerings
4. Peptide-Polyelectrolyte Simulations
5. LOT AI Agents
6. 100 Games Later
7. Sunny Voice
I want you to show each project on the landing page. Clicking on the project icon/title should link to that project's page. 
Each icon should be assets/door.png. Each door should have the title of the project right underneath it. They should be in a grid; maybe 3 to a row. 
Now here's the key: there should be a set of text/tags above the grid. Here are the tags:
[AI, Oncology, Creative Coding, Research, Software Engineering].
each project should have tags mapped. for now you here are some sample mappings to start.
Memory Snowglobe: AI, Creative Coding
Dynamic Lines of Therapy: Oncology, Software Engineering

When a user clicks on a tag, the tag should be highlighted, and each door/text for the grid should stay visible if the tag matches, or drop opacity by 50% if the tag doesn't match. Users can select multiple tags. 

Part C: Markdown for each page
Each project's page will have markdown displayed (project information) that I have stored elsewhere. That markdown should render correctly in the UI on each project page. You should make a sample markdown file to inject for each page. 