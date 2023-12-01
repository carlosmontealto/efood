import estrela from '../../assets/images/estrela.svg'
import * as S from './styles'
import Tag from '../Tag'
import Loader from '../Loader'

type Props = {
  restaurants?: Restaurant[]
  isLoading: boolean
}

const RestaurantList = ({ isLoading, restaurants }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <S.List>
        {restaurants &&
          restaurants.map((i) => (
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
