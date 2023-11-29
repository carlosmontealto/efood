import styled from 'styled-components'
import { colors } from '../../styles'

import { Link } from 'react-router-dom'
import { TagContainer } from '../Tag/styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  row-gap: 48px;
  margin-top: 80px;

  li {
    img {
      width: 100%;
    }
  }
`

export const ImageContent = styled.div`
  position: relative;
  display: block;
  height: auto;
  width: 100%;

  div {
    position: absolute;
    display: flex;
    top: 0;
    right: 0;

    ${TagContainer} {
      margin-right: 16px;
      margin-top: 22px;
      position: relative;
    }
  }
`

export const Content = styled.div`
  border-right: 1px solid ${colors.salmon};
  border-bottom: 1px solid ${colors.salmon};
  border-left: 1px solid ${colors.salmon};
  background: ${colors.white};
  padding: 8px 8px 16px;

  h3 {
    display: flex;
    justify-content: space-between;
    color: ${colors.salmon};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: bold;

      img {
        width: 21px;
        height: 21px;
        margin-left: 8px;
      }
    }
  }
  p {
    color: ${colors.salmon};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const Button = styled(Link)`
  padding: 8px 16px;
  color: ${colors.beige};
  background-color: ${colors.salmon};
  font-weight: bold;
  font-size: 14px;
`
