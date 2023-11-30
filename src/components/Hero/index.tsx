import { useEffect, useState } from 'react'
import * as S from './styles'

type Props = {
  id: string
}

const Hero = ({ id }: Props) => {
  const [products, setProducts] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [id])

  if (!products) {
    return <h3>Carregando...</h3>
  }

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

export default Hero
