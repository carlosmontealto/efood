import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const Header = styled.header`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  background-repeat: repeat;
  background-position: center;
  background-size: 100%;

  padding-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
    height: 100%;
  }
`

export const LogoContainer = styled.div<Props>`
  max-width: 125px;
  margin: 40px auto ${(props) => (props.homePage ? '140px' : '0')};
  padding-bottom: ${(props) => (props.homePage ? '0' : '64px')};

  @media (max-width: ${breakpoints.tablet}) {
    margin: 32px auto;
    padding: 0;
  }
`

export const Logo = styled(Link)`
  h1 {
    img {
      width: 125px;
    }
  }
`

export const SubTitle = styled.p`
  margin: 0 auto;
  color: ${colors.salmon};
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  max-width: 540px;
  padding-bottom: 40px;
`

export const LinkContainer = styled.div`
  width: 250px;
  margin-top: 59px;
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    padding: 0;
  }
`

export const LinkHeader = styled(Link)`
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 900;
`

export const CartInfos = styled.p`
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 900;
  width: 250px;
  margin-top: 59px;
  cursor: pointer;
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    padding: 0;
    padding-bottom: 32px;
  }
`
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    align-items: center;
    text-align: center;
  }
`
