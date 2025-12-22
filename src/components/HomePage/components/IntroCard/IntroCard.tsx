import '@components/HomePage/components/IntroCard/IntroCard.scss';

import { BrushStrokeWrapper, ContentfulImageAlias as ContentfulImage, Heading } from '@components';
import { Asset } from 'contentful';
import { FC } from 'react';

export type IntroCardProps = {
  image: Asset;
  text: string;
};

export const IntroCard: FC<IntroCardProps> = ({ image, text }) => {
  return (
    <div className="intro-card">
      <div className="intro-card__wrapper">
        <div className="intro-card__image">
          <BrushStrokeWrapper>
            <ContentfulImage image={image} width={500} height={500} />
          </BrushStrokeWrapper>
        </div>

        <Heading className="intro-card__heading">{text}</Heading>
      </div>
    </div>
  );
};
