import { useDispatch, useSelector } from 'react-redux'

import { getTotalPrice, parseToBrl } from '../../utils'
import { RootReducer } from '../../store'
import { closeCart, openCheckout, remove } from '../../store/reducers/cart'

import * as S from './styles'
const Cart = () => {
  const { isOpenCart, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCartFunction = () => {
    dispatch(closeCart())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    closeCartFunction()
    dispatch(openCheckout())
  }

  return (
    <S.CartContainer className={isOpenCart ? 'is-open' : ''}>
      <S.Overlay onClick={closeCartFunction} />
      <S.Sidebar>
        <S.CloseButton onClick={closeCartFunction} />
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{parseToBrl(item.preco)}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.Prices>
              <span>Valor total</span>
              <span>{parseToBrl(getTotalPrice(items))}</span>
            </S.Prices>
            <S.ButtonCart
              title="Clique aqui para finalizar a compra"
              type="button"
              onClick={goToCheckout}
            >
              Continue com a entrega
            </S.ButtonCart>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            a compra.
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
