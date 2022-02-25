import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@loopstarter/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: FSMagistralBold;
    src: url('../fonts/FS-Magistral-Bold.ttf');
  }

  @font-face {
    font-family: FSMagistralLight;
    src: url('../fonts/FS-Magistral-Light.ttf');
  }

  @font-face {
    font-family: FSMagistralMedium;
    src: url('../fonts/FS-Magistral-Medium.ttf');
  }

  @font-face {
    font-family: HKGrotesk;
    src: url('../fonts/HKGrotesk-Medium.otf');
  }

  @font-face {
    font-family: HKGroteskBold;
    src: url('../fonts/HKGrotesk-Bold.otf');
  }

  @font-face {
    font-family: HKGroteskLight;
    src: url('../fonts/HKGrotesk-Light.otf');
  }

  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  nav {
    a {
      font-family: FSMagistralLight;
    }
  }

  progress[value]::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }
`

export default GlobalStyle
