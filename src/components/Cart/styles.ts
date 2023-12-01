import styled from 'styled-components'
import { Button, colors } from '../../styles'

import trash from '../../assets/images/lixeira.svg'
import closeIcon from '../../assets/images/close-icon.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.beige};
    text-align: center;
  }
`
export const Prices = styled.p`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 360px;
  span {
    font-weight: 400;
    font-size: 14px;
    color: ${colors.beige};
    margin-bottom: 24px;
  }
`
export const CartItem = styled.li`
  display: flex;
  color: ${colors.salmon};
  background-color: ${colors.beige};
  padding: 8px 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    color: ${colors.salmon};
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    color: ${colors.salmon};
    font-size: 14px;
  }

  button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const ButtonCart = styled(Button)`
  position: relative;
  max-width: 100%;
  width: 100%;
`
export const CloseButton = styled.button`
  background-image: url(${closeIcon});
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
