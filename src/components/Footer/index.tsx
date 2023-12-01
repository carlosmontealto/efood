import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
const Footer = () => {
  return (
    <S.Footer>
      <div className="container">
        <img src={logo} />
        <S.SocialLinks>
          <ul>
            <li>
              <a href="https://instagram.com">
                <img src={instagram} alt="Logo do instagram" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <img src={facebook} alt="Logo do facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <img src={twitter} alt="Logo do twitter" />
              </a>
            </li>
          </ul>
        </S.SocialLinks>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </p>
      </div>
    </S.Footer>
  )
}

export default Footer
