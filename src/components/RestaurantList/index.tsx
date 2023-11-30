import estrela from '../../assets/images/estrela.svg'
import * as S from './styles'
import Tag from '../Tag'
import { useEffect, useState } from 'react'

const RestaurantList = () => {
  const [products, setProducts] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
  })

  if (!products) {
    return <h3>Carregando...</h3>
  }

  return (
    <div className="container">
      <S.List>
        {products.map((i) => (
          <li key={i.id}>
            <S.ImageContent>
              <img src={i.capa} alt={i.titulo} />
              <div>
                {i.destacado ? <Tag>Destaque da semana</Tag> : ''}
                <Tag>{i.tipo}</Tag>
              </div>
            </S.ImageContent>
            <S.Content>
              <h3>
                {i.titulo}
                <span>
                  {i.avaliacao} <img src={estrela} />
                </span>
              </h3>
              <p>{i.descricao}</p>
              <S.Button to={`/perfil/${i.id}`}>Saiba Mais</S.Button>
            </S.Content>
          </li>
        ))}
      </S.List>
    </div>
  )
}

export default RestaurantList
