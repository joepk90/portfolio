import { FC } from 'react';
import Heading from '@components/common/Heading/Heading';
import FlexWrapper from '@components/common/FlexWrapper/FlexWrapper';
import Tags from '@components/common/Tags/Tags';
import '@components/HomePage/components/KeySkillsCard/KeySkillsCard.scss';

export type KeySkillsCardProps = {
  heading: string;
  tagsList: string[];
};

export const KeySkillsCard: FC<KeySkillsCardProps> = ({ tagsList, heading }) => {
  return (
    <div className="key-skills-card">
      <div className="key-skills-card__content">
        <FlexWrapper className="key-skills-card__tags-wrapper">
          <Tags tags={tagsList} />
        </FlexWrapper>
      </div>

      <Heading className="key-skills-card__heading">{heading}</Heading>
    </div>
  );
};
