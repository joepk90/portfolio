import { FC } from 'react';
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ProjectProps } from '@src/lib/contentful/ContentfulProject';
import { ContentfulLink } from '@components/common';

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
      <div className="project-modal__repositories">
        {/* TODO update Typography component to accept font weight variants */}
        <b>Repositories:</b>
        <ul className="project-modal__repository-list">
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
      </div>
    );
  };

  return (
    <div className="project-modal__wrapper">
      {renderDescription()}
      {renderRepositoryLinks()}
    </div>
  );
};
