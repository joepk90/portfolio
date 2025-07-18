import { FC } from 'react';
import { ContentfulImageAlias as ContentfulImage } from '@components/common/ContentfulImage/ContentfulImage';
import Heading from '@components/common/Heading/Heading';
import BrushStrokeWrapper from '@components/common/BrushStrokeWrapper/BrushStrokeWrapper';
import { Asset } from 'contentful';
import '@components/IntroCard/IntroCard.scss';
import { ResponsiveCard } from '@components/common';
import {
  mediumHandsetName,
  mediumHandsetLandscapeName,
  largeHandsetLandscapeName,
  largeTabletName,
  smallTabletLandscapeName,
  largeTabletLandscapeName,
  largeDesktopName,
} from '@styles/base/_variables-breakpoints.module.scss';

export type IntroCardProps = {
  image: Asset;
  text: string;
};

export const IntroCard: FC<IntroCardProps> = ({ image, text }) => {
  return (
    <ResponsiveCard
      breakpointStyles={{
        [mediumHandsetName]: {},
        [mediumHandsetLandscapeName]: {},
        [largeHandsetLandscapeName]: {},
        [largeTabletName]: {},
        [smallTabletLandscapeName]: {},
        [largeTabletLandscapeName]: {},
        [largeDesktopName]: {},
      }}
      reverse
      image={
        <BrushStrokeWrapper>
          <ContentfulImage image={image} width={325} height={325} />
        </BrushStrokeWrapper>
      }
      content={<Heading className="intro-card__heading">{text}</Heading>}
    />
  );
};
