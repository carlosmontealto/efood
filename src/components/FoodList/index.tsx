import pizza from '../../assets/images/pizza.svg'

import * as S from './styles'

const FoodList = () => {
  return (
    <div className="container">
      <S.List>
        <li>
          <img src={pizza} alt="Pizza" />
          <S.Title>Pizza Marguerita</S.Title>
          <S.Description>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </S.Description>
          <S.Button type="button">Adicionar ao carrinho</S.Button>
        </li>
        <li>
          <img src={pizza} alt="Pizza" />
          <S.Title>Pizza Marguerita</S.Title>
          <S.Description>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </S.Description>
          <S.Button type="button">Adicionar ao carrinho</S.Button>
        </li>
        <li>
          <img src={pizza} alt="Pizza" />
          <S.Title>Pizza Marguerita</S.Title>
          <S.Description>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </S.Description>
          <S.Button type="button">Adicionar ao carrinho</S.Button>
        </li>
        <li>
          <img src={pizza} alt="Pizza" />
          <S.Title>Pizza Marguerita</S.Title>
          <S.Description>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </S.Description>
          <S.Button type="button">Adicionar ao carrinho</S.Button>
        </li>
        <li>
          <img src={pizza} alt="Pizza" />
          <S.Title>Pizza Marguerita</S.Title>
          <S.Description>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </S.Description>
          <S.Button type="button">Adicionar ao carrinho</S.Button>
        </li>
        <li>
          <img src={pizza} alt="Pizza" />
          <S.Title>Pizza Marguerita</S.Title>
          <S.Description>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </S.Description>
          <S.Button type="button">Adicionar ao carrinho</S.Button>
        </li>
      </S.List>
    </div>
  )
}

export default FoodList
