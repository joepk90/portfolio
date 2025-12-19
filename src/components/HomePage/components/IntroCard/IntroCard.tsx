import '@components/HomePage/components/IntroCard/IntroCard.scss';

import {
  BrushStrokeWrapper,
  ContentfulImageAlias as ContentfulImage,
  Heading,
} from '@components/common';
import { Asset } from 'contentful';
import { FC } from 'react';

export type IntroCardProps = {
  image: Asset;
  text: string;
};

export const IntroCard: FC<IntroCardProps> = ({ image, text }) => {
  return (
    <div className="intro-card">
      <div className="intro-card__image">
        <BrushStrokeWrapper>
          <ContentfulImage image={image} width={325} height={325} />
        </BrushStrokeWrapper>
      </div>

      <Heading className="intro-card__heading">{text}</Heading>
    </div>
  );
};
