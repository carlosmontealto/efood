import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open, clear } from '../../store/reducers/cart'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import talheres from '../../assets/images/talheres.svg'

export type Props = {
  homePage?: boolean
}

const Header = ({ homePage }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      {homePage ? (
        <S.Header style={{ backgroundImage: `url(${talheres})` }}>
          <S.LogoContainer>
            <S.Logo to="/" onClick={() => dispatch(clear())}>
              <h1>
                <img src={logo} alt="Efood" />
              </h1>
            </S.Logo>
          </S.LogoContainer>
          <S.SubTitle>
            Viva experiências gastronômicas no conforto da sua casa
          </S.SubTitle>
        </S.Header>
      ) : (
        <S.Header style={{ backgroundImage: `url(${talheres})` }}>
          <S.NavBar className="container">
            <S.LinkContainer>
              <S.LinkHeader onClick={() => dispatch(clear())} to="/">
                Restaurantes
              </S.LinkHeader>
            </S.LinkContainer>
            <S.LogoContainer>
              <S.Logo onClick={() => dispatch(clear())} to="/">
                <h1>
                  <img src={logo} alt="Efood" />
                </h1>
              </S.Logo>
            </S.LogoContainer>
            <div>
              <S.CartInfos role="button" onClick={openCart}>
                {items.length} <span>produto(s) no carrinho</span>
              </S.CartInfos>
            </div>
          </S.NavBar>
        </S.Header>
      )}
    </>
  )
}

export default Header
