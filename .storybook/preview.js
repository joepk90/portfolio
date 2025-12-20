import { GlobalCSS } from '@components';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
};

// theme decorator (applies logic to all stories)
const themeDecorator = (Story) => (
  <>
    <GlobalCSS />
    <Story />
  </>
);
