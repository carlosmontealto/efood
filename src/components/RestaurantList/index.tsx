import japones from '../../assets/images/restaurante-sushi.svg'
import italiano from '../../assets/images/restaurante-italiano.svg'
import estrela from '../../assets/images/estrela.svg'
import * as S from './styles'
import Tag from '../Tag'

const RestaurantList = () => {
  return (
    <div className="container">
      <S.List>
        <li>
          <S.ImageContent>
            <img src={japones} alt="Restaurante Hioki Sushi" />
            <div>
              <Tag>Destaque da semana</Tag>
              <Tag>Japonesa</Tag>
            </div>
          </S.ImageContent>
          <S.Content>
            <h3>
              Hioki Sushi{' '}
              <span>
                4.9 <img src={estrela} />
              </span>
            </h3>
            <p>
              Peça já o melhor da culinária japonesa no conforto da sua casa!
              Sushis frescos, sashimis deliciosos e pratos quentes
              irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
              garantida.Experimente o Japão sem sair do lar com nosso delivery!
            </p>
            <S.Button to="/perfil">Saiba Mais</S.Button>
          </S.Content>
        </li>
        <li>
          <S.ImageContent>
            <img src={italiano} alt="La Dolce Vita Trattoria" />
            <div>
              <Tag>Italiana</Tag>
            </div>
          </S.ImageContent>
          <S.Content>
            <h3>
              La Dolce Vita Trattoria{' '}
              <span>
                4.6 <img src={estrela} />
              </span>
            </h3>
            <p>
              A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
              você! Desfrute de massas caseiras, pizzas deliciosas e risotos
              incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
              embalados e sabor inesquecível. Peça já!
            </p>
            <S.Button to="/perfil">Saiba Mais</S.Button>
          </S.Content>
        </li>
        <li>
          <S.ImageContent>
            <img src={italiano} alt="La Dolce Vita Trattoria" />
            <div>
              <Tag>Italiana</Tag>
            </div>
          </S.ImageContent>
          <S.Content>
            <h3>
              La Dolce Vita Trattoria{' '}
              <span>
                4.6 <img src={estrela} />
              </span>
            </h3>
            <p>
              A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
              você! Desfrute de massas caseiras, pizzas deliciosas e risotos
              incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
              embalados e sabor inesquecível. Peça já!
            </p>
            <S.Button to="/perfil">Saiba Mais</S.Button>
          </S.Content>
        </li>
        <li>
          <S.ImageContent>
            <img src={italiano} alt="La Dolce Vita Trattoria" />
            <div>
              <Tag>Italiana</Tag>
            </div>
          </S.ImageContent>
          <S.Content>
            <h3>
              La Dolce Vita Trattoria{' '}
              <span>
                4.6 <img src={estrela} />
              </span>
            </h3>
            <p>
              A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
              você! Desfrute de massas caseiras, pizzas deliciosas e risotos
              incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
              embalados e sabor inesquecível. Peça já!
            </p>
            <S.Button to="/perfil">Saiba Mais</S.Button>
          </S.Content>
        </li>
        <li>
          <S.ImageContent>
            <img src={italiano} alt="La Dolce Vita Trattoria" />
            <div>
              <Tag>Italiana</Tag>
            </div>
          </S.ImageContent>
          <S.Content>
            <h3>
              La Dolce Vita Trattoria{' '}
              <span>
                4.6 <img src={estrela} />
              </span>
            </h3>
            <p>
              A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
              você! Desfrute de massas caseiras, pizzas deliciosas e risotos
              incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
              embalados e sabor inesquecível. Peça já!
            </p>
            <S.Button to="/perfil">Saiba Mais</S.Button>
          </S.Content>
        </li>
        <li>
          <S.ImageContent>
            <img src={italiano} alt="La Dolce Vita Trattoria" />
            <div>
              <Tag>Italiana</Tag>
            </div>
          </S.ImageContent>
          <S.Content>
            <h3>
              La Dolce Vita Trattoria{' '}
              <span>
                4.6 <img src={estrela} />
              </span>
            </h3>
            <p>
              A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
              você! Desfrute de massas caseiras, pizzas deliciosas e risotos
              incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
              embalados e sabor inesquecível. Peça já!
            </p>
            <S.Button to="/perfil">Saiba Mais</S.Button>
          </S.Content>
        </li>
      </S.List>
    </div>
  )
}

export default RestaurantList
