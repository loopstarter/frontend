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

  .slick-slider {
    width: 100%;
  }
  
  .slick-prev, .slick-next {
    background-image: url(/images/home/right.png);
    width: 20px;
    height: 20px;
    background-size: contain;
    border-radius: 50%;
    ::before {
      content: '';
    }
    :hover {
      background-image: url(/images/home/right.png) !important;
      background-size: contain;
    }
  }
  .slick-prev {
    left: 3px;
  }
  .slick-next {
    right: 3px;
    top: 49%;
    transform: rotate(180deg);
  }

  .roadmap .slick-next {
    top: 43%;
  }

  .roadmap .slick-prev {
    top: 43%;
  }

  @media only screen and (min-width: 852px) {
    .slick-slider {
      display: none !important;
    }
  }
  @media only screen and (min-width: 413px) {
    .slick-prev, .slick-next {
      width: 28px;
      height: 28px;
    }
    .slick-prev {
      left: 5%;
    }
    .slick-next {
      right: 5%;
    }
  }
  @media screen and (min-width: 370px) {
    #member10 {
      visibility: hidden;
    }
  }

  
`

export default GlobalStyle
