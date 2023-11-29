import styled from 'styled-components'
import { colors } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;
  row-gap: 32px;

  li {
    background-color: ${colors.salmon};
    width: 100%;
    padding: 8px;
    img {
      width: 100%;
    }
  }
`

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.beige};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  border: none;
  margin-top: 8px;
  cursor: pointer;
`

export const Description = styled.p`
  color: ${colors.beige};
  font-size: 14px;
  line-height: 22px;
`

export const Title = styled.h3`
  color: ${colors.beige};
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`
