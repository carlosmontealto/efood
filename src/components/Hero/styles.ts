import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 280px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  padding-top: 24px;
  margin-bottom: 56px;

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`
export const Infos = styled.div`
  h2 {
    color: ${colors.white};
    font-size: 32px;
    font-weight: 900;
  }

  p {
    color: ${colors.white};
    font-size: 32px;
    font-weight: 100;
    margin-bottom: 156px;
  }
`
