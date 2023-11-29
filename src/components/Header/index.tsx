import logo from '../../assets/images/logo.svg'

import * as S from './styles'

import talheres from '../../assets/images/talheres.svg'

export type Props = {
  homePage?: boolean
}

const Header = ({ homePage }: Props) => {
  return (
    <>
      {homePage ? (
        <S.Header style={{ backgroundImage: `url(${talheres})` }}>
          <S.LogoContainer>
            <S.Logo to="/">
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
              <S.LinkHeader to="/">Restaurantes</S.LinkHeader>
            </S.LinkContainer>
            <S.LogoContainer>
              <S.Logo to="/">
                <h1>
                  <img src={logo} alt="Efood" />
                </h1>
              </S.Logo>
            </S.LogoContainer>
            <S.CartInfos>
              <span>0</span> produto(s) no carrinho
            </S.CartInfos>
          </S.NavBar>
        </S.Header>
      )}
    </>
  )
}

export default Header
