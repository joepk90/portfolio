import { FC } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ProjectProps } from '@src/lib/contentful/ContentfulProject';
import { Tags, TagsAlignmentVariant } from '@components/common/Tags/Tags';
import { ContentfulImageAlias } from '@components/common';
import {
  generateBEMModifiersClassList,
  ThemeVariant,
  smallTabletLandscapeBreakpoint,
} from '@src/lib/utilities';
import { useMediaQuery } from 'react-responsive';

import '@components/ProjectCard/ProjectCard.scss';
import { useIsClient } from '@src/hooks';

const tagsLimit = 5;

export type ProjectCardComponentProps = {
  project: ProjectProps;
  variant?: ThemeVariant;
  reverse?: boolean;
};

export const tagsVariantMap = {
  [ThemeVariant.Light]: ThemeVariant.Dark,
  [ThemeVariant.Dark]: ThemeVariant.Light,
};

const Project: FC<ProjectCardComponentProps> = ({
  project,
  variant = ThemeVariant.Light,
  reverse = false,
}) => {
  const { date, summary, title, type, url, tags, image } = project;

  const isClient = useIsClient();
  const isSmallTabletLandscape = useMediaQuery({
    query: smallTabletLandscapeBreakpoint,
  });

  /**
   * Descripiong and Repositories
   * This code is left in as it will be used for the Project page in the future.
   */
  // const renderDescription = () => {
  //   if (!description || typeof description === 'string') return '';

  //   const text = documentToReactComponents(description);

  //   const placeHolderText =
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  //   return <div className="project-card__description">{placeHolderText}</div>;
  // };

  // const renderRepositories = () => {
  //   if (!repositories || repositories.length === 0) return '';

  //   return (
  //     <div className="project-card__repositories">
  //       <strong>Repositories:</strong>
  //       <ul className="project-card__repository">
  //         {repositories.map((repository, key) => {
  //           return (
  //             <li key={key}>
  //               <a href={repository} target="_blank" rel="noopener noreferrer">
  //                 {repository}
  //               </a>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </div>
  //   );
  // };

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

  const renderSummary = () => {
    if (!summary) return '';

    return <div className="project-card__summary">{summary}</div>;
  };

  const getTagsAlignment = () => {
    if (!isSmallTabletLandscape || !isClient) {
      return TagsAlignmentVariant.Center;
    }

    if (reverse === false) {
      return TagsAlignmentVariant.Right;
    }

    return TagsAlignmentVariant.Left;
  };

  const getLimitedTagsArray = (tags: string[]) => {
    return tags.slice(0, tagsLimit);
  };

  const renderTags = () => {
    if (!tags || tags.length === 0) return '';

    // limit tags?
    const limitedTagsArray = getLimitedTagsArray(tags);

    return (
      <div className="project-card__technologies">
        <div className="project-card__tags">
          <Tags tags={tags} align={getTagsAlignment()} variant={tagsVariantMap[variant]} />
        </div>
      </div>
    );
  };

  const renderImage = () => {
    if (!image) return;

    const className = 'project-card__image';
    const contentfulImage = <ContentfulImageAlias image={image} width={400} height={300} />;

    // TODO create a more elegant Link component?
    // https://gist.github.com/joepk90/d91114aebb01a1143d722492568c3b80

    return (
      <>
        {url ? (
          <a href={url} className={className} target="_blank" rel="noopener noreferrer">
            {contentfulImage}
          </a>
        ) : (
          <div className={className}>{contentfulImage}</div>
        )}
      </>
    );
  };

  const modifers = [variant as string];
  if (reverse) {
    modifers.push('reverse');
  }

  const className = generateBEMModifiersClassList('project-card', modifers);

  return (
    <div className={className}>
      <div className="project-card__wrapper">
        <div className="project-card__details">
          {isSmallTabletLandscape && renderTitle()}
          {renderSpecs()}
          {renderSummary()}
          {renderTags()}
        </div>
        <div className="project-card__feature">
          {!isSmallTabletLandscape && renderTitle()}
          <div className="project-card__thumbnail">{renderImage()}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
