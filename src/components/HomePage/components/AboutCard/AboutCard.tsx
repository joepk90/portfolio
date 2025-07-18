import { FC } from 'react';
import { ReactMarkdownAlias as ReactMarkdown } from '@components/common/ReactMarkdown/ReactMarkdown';
import Heading from '@src/components/common/Heading/Heading';
import '@components/HomePage/components/AboutCard/AboutCard.scss';

export type AboutCardProps = {
  pageContent: string;
  heading: string;
};

export const AboutCard: FC<AboutCardProps> = ({ pageContent, heading }) => {
  return (
    <div className="about-card">
      <Heading className="about-card__heading">{heading}</Heading>
      <ReactMarkdown className="about-card__content">{pageContent}</ReactMarkdown>
    </div>
  );
};
