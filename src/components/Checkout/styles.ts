import styled from 'styled-components'
import { Button, colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CheckoutContainer = styled.div`
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

export const ButtonCheckout = styled(Button)`
  position: relative;
  max-width: 100%;
  width: 100%;
`
export const FormCheckout = styled.div`
  display: block;
  margin-right: 20px;
  margin-bottom: 16px;
  h3 {
    color: ${colors.beige};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  label {
    color: ${colors.beige};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    display: block;
  }

  input {
    width: 100%;
    padding: 8px;
    background-color: ${colors.beige};
    color: ${colors.gray};
    border: 2px solid ${colors.beige};
    margin-bottom: 8px;

    &.error {
      border: 2px solid Red;
    }
  }

  .cardInput {
    display: grid;
    grid-template-columns: 70% auto;
    gap: 48px;

    div {
      display: block;
    }
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;

    div {
      display: block;
    }
  }
`
export const SuccessMessage = styled.div`
  display: block;
  margin-right: 20px;
  margin-bottom: 16px;
  max-width: 360px;
  width: 100%;

  h3 {
    color: ${colors.beige};
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  p {
    color: ${colors.beige};
    font-size: 14px;
    margin-bottom: 24px;
    text-align: justify;
    line-height: 22px;
  }
  div {
  }
`
