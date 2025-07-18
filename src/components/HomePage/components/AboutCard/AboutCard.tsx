import { FC } from 'react';
import FlexWrapper from '@components/common/FlexWrapper/FlexWrapper';
import { ReactMarkdownAlias as ReactMarkdown } from '@components/common/ReactMarkdown/ReactMarkdown';
import Tags from '@components/common/Tags/Tags';
import { ThemeVariant } from '@src/lib/utilities';
import '@components/HomePage/components/AboutCard/AboutCard.scss';

export type AboutCardProps = {
  pageContent: string;
  tagsList: string[];
};

export const AboutCard: FC<AboutCardProps> = ({ pageContent, tagsList }) => {
  return (
    <div className="about-card">
      <ReactMarkdown className="about-card__content">{pageContent}</ReactMarkdown>
      <FlexWrapper className="about-card__tags-wrapper">
        <Tags tags={tagsList} variant={ThemeVariant.Light} />
      </FlexWrapper>
    </div>
  );
};
