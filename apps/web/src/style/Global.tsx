import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'
import HeroBg from '../../public/images/hero.png'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: var(--font-poppins), sans-serif;
  }
  body {
    // background-color: ${({ theme }) => theme.colors.background};
    background: url('/images/bg.jpg') center center / cover no-repeat;
    background-color: #06010f ;
    // background-size: cover;
    max-height: 1200px;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
