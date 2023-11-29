import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#ffffff',
  beige: '#FFEBD9',
  lightBeige: '#FFF8F2',
  salmon: '#E66767'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    list-style: none;
  }

  body {
    background-color: ${colors.lightBeige};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
