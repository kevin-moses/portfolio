import memorySnowglobeCopy from './projects/memory-snowglobe.md?raw';
import dynamicLinesCopy from './projects/dynamic-lines-of-therapy.md?raw';
import thoughtOfferingsCopy from './projects/thought-offerings.md?raw';
import peptideSimCopy from './projects/peptide-polyelectrolyte-simulations.md?raw';
import lotAgentsCopy from './projects/lot-ai-agents.md?raw';
import oneHundredGamesCopy from './projects/100-games-later.md?raw';
import sunnyVoiceCopy from './projects/sunny-voice.md?raw';

const pngAssets = Object.entries(
  import.meta.glob('../../assets/**/*.png', { eager: true, import: 'default' }),
).reduce((acc, [path, asset]) => {
  const filename = path.split('/').pop();
  acc[filename] = asset;
  return acc;
}, {});

export const PNG_ASSETS = pngAssets;

export const PROJECT_TAGS = [
  'AI',
  'Oncology',
  'Creative Coding',
  'Research',
  'Software Engineering',
];

const projects = [
  {
    id: 'memory-snowglobe',
    slug: 'memory-snowglobe',
    title: 'Memory Snowglobe',
    tags: ['AI', 'Creative Coding'],
    markdown: memorySnowglobeCopy,
  },
  {
    id: 'dynamic-lines-of-therapy',
    slug: 'dynamic-lines-of-therapy',
    title: 'Dynamic Lines of Therapy',
    tags: ['Oncology', 'Software Engineering', 'Research'],
    markdown: dynamicLinesCopy,
  },
  {
    id: 'thought-offerings',
    slug: 'thought-offerings',
    title: 'Thought Offerings',
    tags: ['Creative Coding', 'Research'],
    markdown: thoughtOfferingsCopy,
  },
  {
    id: 'peptide-polyelectrolyte-simulations',
    slug: 'peptide-polyelectrolyte-simulations',
    title: 'Peptide-Polyelectrolyte Simulations',
    tags: ['Research', 'Software Engineering'],
    markdown: peptideSimCopy,
  },
  {
    id: 'lot-ai-agents',
    slug: 'lot-ai-agents',
    title: 'LOT AI Agents',
    tags: ['AI', 'Software Engineering'],
    markdown: lotAgentsCopy,
  },
  {
    id: '100-games-later',
    slug: '100-games-later',
    title: '100 Games Later',
    tags: ['Creative Coding'],
    markdown: oneHundredGamesCopy,
  },
  {
    id: 'sunny-voice',
    slug: 'sunny-voice',
    title: 'Sunny Voice',
    tags: ['AI', 'Research', 'Software Engineering'],
    markdown: sunnyVoiceCopy,
  },
];

export default projects;


