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

const getMediaQueryString = (breakpoint: string) => `(min-width: ${breakpoint}px)`;

export const mediumHandsetBreakpoint = getMediaQueryString(mediumHandsetSize);
export const mediumHandsetLandscapeBreakpoint = getMediaQueryString(mediumHandsetLandscapeSize);
export const largeHandsetLandscapeBreakpoint = getMediaQueryString(largeHandsetLandscapeSize);
export const largeTabletBreakpoint = getMediaQueryString(largeTabletSize);
export const smallTabletLandscapeBreakpoint = getMediaQueryString(smallTabletLandscapeSize);
export const largeTabletLandscapeBreakpoint = getMediaQueryString(largeTabletLandscapeSize);
export const largeDesktopBreakpoint = getMediaQueryString(largeDesktopSize);
