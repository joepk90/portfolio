import '@components/HomePage/components/KeySkillsCard/KeySkillsCard.scss';

import { FlexWrapper, Heading, Tags } from '@components';
import { FC } from 'react';

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

      <Heading level={3} className="key-skills-card__heading">
        {heading}
      </Heading>
    </div>
  );
};
