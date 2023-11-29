import styled from 'styled-components'
import { colors } from '../../styles'

export const Footer = styled.footer`
  background-color: ${colors.beige};
  text-align: center;
  margin-top: 120px;

  div {
    > img {
      width: 125px;
      margin: 40px auto;
    }

    > p {
      margin: 80px auto 0;
      padding-bottom: 40px;
      color: ${colors.salmon};

      font-size: 10px;
      width: 480px;
    }
  }
`

export const SocialLinks = styled.div`
  ul {
    display: flex;
    width: 88px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    li {
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`
