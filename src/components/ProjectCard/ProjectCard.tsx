import { FC } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ProjectProps } from '@src/lib/contentful/ContentfulProject';
import { Tags, TagsAlignmentVariant } from '@components/common/Tags/Tags';
import { ContentfulImageAlias } from '@components/common';
import '@components/ProjectCard/ProjectCard.scss';
import { generateBEMModifiersClassList, ThemeVariant } from '@src/lib/utilities';

export type ProjectCardComponentProps = {
  project: ProjectProps;
  variant?: ThemeVariant;
};

const Project: FC<ProjectCardComponentProps> = ({ project, variant = ThemeVariant.Light }) => {
  const { date, description, repositories, title, type, url, tags, image } = project;

  const renderRepositories = () => {
    if (!repositories || repositories.length === 0) return '';

    return (
      <div className="project-card__repositories">
        <strong>Repositories:</strong>
        <ul className="project-card__repository">
          {repositories.map((repository, key) => {
            return (
              <li key={key}>
                <a href={repository} target="_blank" rel="noopener noreferrer">
                  {repository}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const renderSpecs = () => {
    if (!type) return '';

    return (
      <span className="project-card__spec">
        {type} | {date}
      </span>
    );
  };

  const renderTitle = () => {
    if (!title) return '';

    return <h2 className="project-card__title">{title}</h2>;
  };

  const renderDescription = () => {
    if (!description || typeof description === 'string') return '';

    const text = documentToReactComponents(description);

    const placeHolderText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    return <div className="project-card__description">{placeHolderText}</div>;
  };

  const renderTags = () => {
    if (!tags || tags.length === 0) return '';

    return (
      <div className="project-card__technologies">
        <div className="project-card__tags">
          <Tags tags={tags} align={TagsAlignmentVariant.Right} variant={variant} />
        </div>
      </div>
    );
  };

  const renderImage = () => {
    if (!image) return;

    const contentfulImage = <ContentfulImageAlias image={image} width={400} height={300} />;

    // TODO create a more elegant Link component?
    // https://gist.github.com/joepk90/d91114aebb01a1143d722492568c3b80

    return (
      <div className="project-card__image">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {contentfulImage}
          </a>
        ) : (
          contentfulImage
        )}
      </div>
    );
  };

  const className = generateBEMModifiersClassList('project-card', [variant]);

  return (
    <div className={className}>
      <div className="project-card__wrapper">
        <div className="project-card__details">
          {renderTitle()}
          {renderSpecs()}
          {renderDescription()}
          {renderTags()}
        </div>
        <div className="project-card__thumbnail">{renderImage()}</div>
      </div>
    </div>
  );
};

export default Project;
