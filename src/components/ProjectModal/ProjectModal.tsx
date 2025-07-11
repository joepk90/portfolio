import { FC } from 'react';
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ProjectProps } from '@src/lib/contentful/ContentfulProject';
import { ContentfulLink, Typography } from '@components/common';

import '@components/ProjectModal/ProjectModal.scss';

export type ProjectModalProps = {
  project: ProjectProps;
};

export const ProjectModal: FC<ProjectModalProps> = ({ project }) => {
  const { title, repositoryLinks, description } = project;

  const renderDescription = () => {
    if (!description || typeof description === 'string') return '';

    const text = documentToReactComponents(description as Document);

    return <div className="project-modal__description">{text}</div>;
  };

  const renderRepositoryLinks = () => {
    if (!repositoryLinks || repositoryLinks.length === 0) return '';

    return (
      <ul className="project-modal__repositories">
        {repositoryLinks.map((repositoryLink, key) => {
          return (
            <li className="project-modal__repository-list-item" key={key}>
              <ContentfulLink
                {...repositoryLink}
                className="project-modal__repository-link"
                target="_blank"
              />
            </li>
          );
        })}
      </ul>
    );
  };

  const renderTitle = () => {
    if (!title) return '';

    return <Typography variant="heading2">{title}</Typography>;
  };

  return (
    <div className="project-modal__wrapper">
      <div className="project-modal__wrapper">
        {/* {renderTitle()} */}
        {renderDescription()}
        {renderRepositoryLinks()}
      </div>
    </div>
  );
};
