import '@components/HomePage/components/AboutCard/AboutCard.scss';

import { Heading } from '@components/common';
import { ReactMarkdownAlias as ReactMarkdown } from '@components/common/ReactMarkdown';
import { FC } from 'react';

export type AboutCardProps = {
  pageContent: string;
  heading: string;
};

export const AboutCard: FC<AboutCardProps> = ({ pageContent, heading }) => {
  return (
    <div className="about-card">
      <Heading level={2} className="about-card__heading">
        {heading}
      </Heading>
      <ReactMarkdown className="about-card__content">{pageContent}</ReactMarkdown>
    </div>
  );
};
