import { useMemo, useState } from 'react';
import projects, { PROJECT_TAGS } from '../data/projects';
import ProjectRoom from './ProjectRoom';

function ProjectsSection() {
  const [activeTags, setActiveTags] = useState([]);

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((existing) => existing !== tag) : [...prev, tag],
    );
  };

  const projectCards = useMemo(() => {
    const hasFilters = activeTags.length > 0;
    return projects.map((project) => {
      const matches = project.tags.some((tag) => activeTags.includes(tag));
      return {
        project,
        isDimmed: hasFilters && !matches,
      };
    });
  }, [activeTags]);

  return (
    <section className="projects" aria-label="Project rooms" id="projects-section">
      <div className="projects__header">
        <p className="projects__eyebrow">Project Rooms</p>
        <h2 className="projects__title">Open any door</h2>
        <p className="projects__description">
          Filter by tag to highlight the rooms that match. Each entry opens a detailed markdown room.
        </p>
        <div className="projects__tags" role="group" aria-label="Project tags">
          {PROJECT_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`projects__tag${activeTags.includes(tag) ? ' is-active' : ''}`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="projects__grid">
        {projectCards.map(({ project, isDimmed }) => (
          <ProjectRoom key={project.id} project={project} isDimmed={isDimmed} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

