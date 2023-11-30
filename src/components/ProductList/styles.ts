import styled from 'styled-components'
import { Button, breakpoints, colors } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;
  row-gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const Product = styled.li`
  background-color: ${colors.salmon};
  width: 100%;
  padding: 8px;
  position: relative;
  height: 420px;

  img {
    width: 100%;
    height: 168px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 32px;
    height: auto;
    padding-bottom: 32px;
  }
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
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  &.is-visible {
    display: flex;
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  padding: 32px;
  background-color: ${colors.salmon};
  header {
    display: grid;
    grid-template-columns: 280px auto;
    gap: 24px;
    justify-content: space-between;

    .contentContainer {
      display: block;
    }

    h4 {
      color: ${colors.white};
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
    }

    p {
      color: ${colors.white};
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }

    img {
      display: block;
      width: 280px;
      height: 280px;
      object-fit: cover;
    }

    .closeIcon {
      position: absolute;
      right: 0;
      top: 0;
      padding: 8px;
      height: 16px;
      width: 16px;
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px;
    max-width: 90%;
    width: 100%;
    padding-bottom: 32px;
    position: fixed;
    header {
      display: block;
      grid-template-columns: 1fr;
      gap: 0;
      img {
        width: 60vw;
        height: 40vw;
        margin: 0 auto 8px;
      }
      h4 {
        max-width: 100%;
        text-align: center;
      }
      p {
        max-width: 100%;
        text-align: justify;
      }
    }
  }
`

export const ButtonModal = styled(Button)`
  width: auto;
  padding: 4px 8px;
  margin-top: 16px;
  bottom: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 95%;
    width: 100%;
    bottom: 8px;
    margin: 0 auto;
  }
`
