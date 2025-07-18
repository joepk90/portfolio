import { FC, ReactElement, CSSProperties } from 'react';
import { generateBEMModifiersClassList } from '@src/lib/utilities';
import '@components/common/ResponsiveCard/ResponsiveCard.scss';

import breakpoints from '@styles/base/_variables-breakpoints.module.scss';

const {
  mediumHandsetSize,
  mediumHandsetLandscapeSize,
  largeHandsetLandscapeSize,
  largeTabletSize,
  smallTabletLandscapeSize,
  largeTabletLandscapeSize,
  largeDesktopSize,
} = breakpoints;

// type BreakpointStyles = {
//   [key in keyof typeof breakpoints]: CSSProperties;
// };

type BreakpointStyles = {
  [mediumHandsetSize]: CSSProperties;
  [mediumHandsetLandscapeSize]: CSSProperties;
  [largeHandsetLandscapeSize]: CSSProperties;
  [largeTabletSize]: CSSProperties;
  [smallTabletLandscapeSize]: CSSProperties;
  [largeTabletLandscapeSize]: CSSProperties;
  [largeDesktopSize]: CSSProperties;
};

export type ResponsiveCardProps = {
  image: ReactElement;
  content: ReactElement;
  reverse?: boolean;
  gap?: number;
  breakpointStyles?: BreakpointStyles;
};

const renderBreakpointStyles = (breakpointStyles?: BreakpointStyles) => {
  if (!breakpointStyles) {
    return {} as CSSProperties;
  }

  // PROBLEM - CANT USE MEDIA QUERIES IN CSSPROPERTIES!!!
  let mergedStyles: CSSProperties = {};
  for (const key in breakpointStyles) {
    if (breakpointStyles.hasOwnProperty(key)) {
      Object.assign(mergedStyles, breakpointStyles[key]);
    }
  }
  return mergedStyles;
};

export const ResponsiveCard: FC<ResponsiveCardProps> = ({
  image,
  content,
  reverse,
  breakpointStyles,
}) => {
  let className = 'responsive-card';
  let bemModifiers = [];
  if (reverse) {
    bemModifiers.push('reverse');
  }

  const classNames = generateBEMModifiersClassList(className, bemModifiers);

  const styles = renderBreakpointStyles(breakpointStyles);

  return (
    <div className={classNames} style={styles}>
      <div className="responsive-card__image">{image}</div>
      <div className="responsive-card__content">{content}</div>
    </div>
  );
};
