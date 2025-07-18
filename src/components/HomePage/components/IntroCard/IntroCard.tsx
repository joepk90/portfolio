import { FC } from 'react';
import { ContentfulImageAlias as ContentfulImage } from '@components/common/ContentfulImage/ContentfulImage';
import Heading from '@components/common/Heading/Heading';
import FlexWrapper from '@components/common/FlexWrapper/FlexWrapper';
import BrushStrokeWrapper from '@components/common/BrushStrokeWrapper/BrushStrokeWrapper';
import { Asset } from 'contentful';
import '@components/HomePage/components/IntroCard/IntroCard.scss';

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
