import vars from '@styles/base/_variables-colors.module.scss';

export enum BackgroundVariant {
  White = 'white',
  LightGrey = 'light-grey',
  Grey = 'grey',
  DarkGrey = 'dark-grey',
  Primary = 'primary',
}

export const backgroundVariantOptions = {
  [BackgroundVariant.White]: vars.backgroundWhite,
  [BackgroundVariant.LightGrey]: vars.backgroundSubtleWhite,
  [BackgroundVariant.Grey]: vars.backgroundLightGrey,
  [BackgroundVariant.DarkGrey]: vars.backgroundDarkGrey,
  [BackgroundVariant.Primary]: vars.backgroundPrimary,
};
