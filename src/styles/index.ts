import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

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
export const Button = styled.button`
  position: absolute;
  bottom: 8px;
  margin: 0 auto;
  width: 95%;
  background-color: ${colors.beige};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  border: none;
  margin-top: 8px;
  cursor: pointer;
`
