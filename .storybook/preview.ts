import type { Preview } from '@storybook/react'
import '../src/app/globals.css'

import { withThemeByDataAttribute } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        // nameOfTheme: 'dataAttributeForTheme',
        light: '',
        dark: 'dark'
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
      parentSelector: 'html'
    })
  ]
}

export default preview
