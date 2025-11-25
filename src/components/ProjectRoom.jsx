import { Link } from 'react-router-dom';
import doorIllustration from '../../assets/door.png';

function ProjectRoom({ project, isDimmed }) {
  return (
    <article
      className={`project-card${isDimmed ? ' project-card--dim' : ''}`}
      aria-label={`${project.title} project room`}
    >
      <Link className="project-card__link project-card__link--stacked" to={`/projects/${project.slug}`}>
        <img
          src={doorIllustration}
          alt={`${project.title} door icon`}
          className="project-card__image"
          loading="lazy"
        />
        <h3 className="project-card__title project-card__title--small">{project.title}</h3>
      </Link>
    </article>
  );
}

export default ProjectRoom;

