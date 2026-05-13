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
        <h2 className="projects__title">Projects</h2>
        <p className="projects__description">
          Shown in chronological order. Filter by tag.
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
      <ul className="projects__list">
        {projectCards.map(({ project, isDimmed }) => (
          <ProjectRoom key={project.id} project={project} isDimmed={isDimmed} />
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;

