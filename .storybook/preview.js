import { withA11y } from '@storybook/addon-a11y';
import GlobalCSS from '@components/GlobalCSS/GlobalCSS';

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

// theme decorator (applies logic to all stories)
const themeDecorator = (Story) => (
  <>
    <GlobalCSS />
    <Story />
  </>
)

export const decorators = [
  withA11y,
]
