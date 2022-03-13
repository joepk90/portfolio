import { withA11y } from '@storybook/addon-a11y';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
    }
  }
}

export const decorators = [
  withA11y,
]
