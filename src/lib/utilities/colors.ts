import vars from '@styles/base/_variables-colors.module.scss';

export enum BackgroundVariant {
  White = 'white',
  SubtleWhite = 'subtle-white',
  LightGrey = 'light-grey',
  Grey = 'grey',
  DarkGrey = 'dark-grey',
  Black = 'black',
}

export const backgroundVariantOptions = {
  [BackgroundVariant.White]: vars.backgroundWhite,
  [BackgroundVariant.SubtleWhite]: vars.backgroundSubtleWhite,
  [BackgroundVariant.LightGrey]: vars.backgroundSubtleWhite,
  [BackgroundVariant.Grey]: vars.backgroundLightGrey,
  [BackgroundVariant.DarkGrey]: vars.backgroundDarkGrey,
  [BackgroundVariant.Black]: vars.backgroundBlack,
};
