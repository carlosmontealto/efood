import * as S from './styles'

import fotoHero from '../../assets/images/restaurante-italiano.svg'

const Hero = () => {
  return (
    <S.Banner style={{ backgroundImage: `url(${fotoHero})` }}>
      <div className="container">
        <S.Infos>
          <p>Italiana</p>
          <h2>La Dolce Vita Trattoria</h2>
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
