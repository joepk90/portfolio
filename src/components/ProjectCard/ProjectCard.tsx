import '@components/ProjectCard/ProjectCard.scss';

import { ContentfulImageAlias, FlexWrapper, Link, Tags } from '@components/common';
import { ProjectProps } from '@src/lib/contentful/ContentfulProject';
import {
  generateBEMModifiersClassList,
  smallTabletLandscapeBreakpoint,
  ThemeVariant,
} from '@src/lib/utilities';
import { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const tagsLimit = 5;

export type ProjectCardComponentProps = {
  project: ProjectProps;
  onReadMoreClick?: () => void;
  variant?: ThemeVariant;
  reverse?: boolean;
};

export const tagsVariantMap = {
  [ThemeVariant.Light]: ThemeVariant.Dark,
  [ThemeVariant.Dark]: ThemeVariant.Light,
};

export const ProjectCard: FC<ProjectCardComponentProps> = ({
  project,
  onReadMoreClick,
  variant = ThemeVariant.Light,
  reverse = false,
}) => {
  const { date, summary, title, type, url, tags, image, description } = project;

  const isSmallTabletLandscape = useMediaQuery({
    query: smallTabletLandscapeBreakpoint,
  });

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
          <Tags tags={tags} variant={tagsVariantMap[variant]} />
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

  const renderReadMoreLink = () => {
    if (!description) return null;

    if (typeof onReadMoreClick !== 'function') {
      return null;
    }

    // TODO use button instead of link
    return (
      <Link
        variant={variant}
        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          e.preventDefault();
          onReadMoreClick();
        }}
      >
        <FlexWrapper
          className="project-card__read-more-content"
          flexDirection="row"
          alignItems="center"
          gap={5}
        >
          <>
            Read More
            <FaArrowRight />
          </>
        </FlexWrapper>
      </Link>
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
          {renderReadMoreLink()}
        </div>
        <div className="project-card__feature">
          {!isSmallTabletLandscape && renderTitle()}
          <div className="project-card__thumbnail">{renderImage()}</div>
        </div>
      </div>
    </div>
  );
};
