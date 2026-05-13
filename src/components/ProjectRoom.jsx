import { Link } from 'react-router-dom';

function ProjectRoom({ project, isDimmed }) {
  return (
    <li
      className={`project-row${isDimmed ? ' project-row--dim' : ''}`}
      aria-label={`${project.title} project`}
    >
      <Link className="project-row__link" to={`/${project.slug}`}>
        <span className="project-row__title">{project.title}</span>
        <span className="project-row__tags">{project.tags.join(' · ')}</span>
      </Link>
    </li>
  );
}

export default ProjectRoom;
