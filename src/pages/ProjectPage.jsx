import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import HydraBackground from '../components/HydraBackground';
import projects, { PNG_ASSETS } from '../data/projects';

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return (
      <main className="project-page">
        <HydraBackground />
        <div className="project-page__inner">
          <p className="project-page__eyebrow">Project Room</p>
          <h1 className="project-page__title">Door not found</h1>
          <p className="project-page__description">
            That room doesn&apos;t exist yet. Head back to the foyer to pick another door.
          </p>
          <Link to="/" className="project-page__back-link">
            ← Return to foyer
          </Link>
        </div>
      </main>
    );
  }

  const markdownComponents = useMemo(
    () => ({
      img: ({ node, src, alt, ...props }) => {
        const normalizedSrc = src?.replace(/^@/, '');
        const assetSrc =
          normalizedSrc && (project.assets?.[normalizedSrc] ?? PNG_ASSETS[normalizedSrc]);

        return (
          <img
            {...props}
            src={assetSrc ?? src}
            alt={alt}
            loading="lazy"
            className="project-page__image"
          />
        );
      },
    }),
    [project],
  );

  return (
    <main className="project-page">
      <HydraBackground />
      <div className="project-page__inner">
        <Link to="/" className="project-page__back-link">
          ← Return to foyer
        </Link>
        <p className="project-page__eyebrow">Project Room</p>
        <h1 className="project-page__title">{project.title}</h1>
        <ul className="project-page__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-page__markdown">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
            {project.markdown}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;

