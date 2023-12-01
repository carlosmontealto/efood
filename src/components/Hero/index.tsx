import Loader from '../Loader'

import * as S from './styles'

type Props = {
  products?: Restaurant
  isLoading: boolean
}

const Hero = ({ isLoading, products }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  if (products) {
    return (
      <S.Banner style={{ backgroundImage: `url(${products.capa})` }}>
        <div className="container">
          <S.Infos>
            <p>{products.tipo}</p>
            <h2>{products.titulo}</h2>
          </S.Infos>
        </div>
      </S.Banner>
    )
  }
  return <></>
}

export default Hero
