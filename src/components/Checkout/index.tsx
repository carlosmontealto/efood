import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import {
  closeCheckout,
  openCart,
  clear,
  closeCart
} from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Checkout = () => {
  const [payment, setPayment] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isOpenCheckout, items } = useSelector(
    (state: RootReducer) => state.cart
  )

  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      //Dados de cobrança / entrega
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O campo precisa ter 9 caracteres')
        .max(9, 'O campo precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(2, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        5,
        'O nome precisa ter pelo menos 5 caracteres'
      ),
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O campo precisa ter 16 caracteres')
        .max(19, 'O campo precisa ter 16 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O mês precisa ter 2 caracteres')
        .max(2, 'O mês precisa ter 2 caracteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O ano precisa ter 2 caracteres')
        .max(2, 'O ano precisa ter 2 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O codigo precisa ter 3 caracteres')
        .max(3, 'O codigo precisa ter 3 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          address: {
            city: values.city,
            complement: values.complement,
            description: values.description,
            number: Number(values.number),
            zipCode: values.zipCode
          },
          receiver: values.receiver
        },
        payment: {
          card: {
            code: Number(values.cardCode),
            name: values.cardName,
            number: values.cardNumber,
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const goToCart = () => {
    dispatch(closeCheckout())
    dispatch(openCart())
  }

  const closeAll = () => {
    dispatch(closeCart())
    dispatch(closeCheckout())
    setPayment(false)
    navigate('/')
    window.location.reload()
  }

  return (
    <S.CheckoutContainer className={isOpenCheckout ? 'is-open' : ''}>
      <S.Overlay />
      <S.Sidebar>
        {isSuccess && data ? (
          <S.SuccessMessage>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.{' '}
              <br /> <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br /> <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br /> <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <S.ButtonCheckout onClick={closeAll}>Concluir</S.ButtonCheckout>
          </S.SuccessMessage>
        ) : (
          <>
            <form onSubmit={form.handleSubmit}>
              {items.length > 0 ? (
                payment ? (
                  <>
                    <S.FormCheckout>
                      <h3>
                        Pagamento - valor a pagar {parseToBrl(totalPrice)}
                      </h3>
                      <label htmlFor="cardName">Nome no cartão</label>
                      <input
                        id="cardName"
                        type="text"
                        name="cardName"
                        value={form.values.cardName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardName') ? 'error' : ''
                        }
                      ></input>
                      <div className="cardInput">
                        <div>
                          <label htmlFor="cardNumber">Número do cartão</label>
                          <InputMask
                            mask="9999 9999 9999 9999"
                            id="cardNumber"
                            type="text"
                            name="cardNumber"
                            value={form.values.cardNumber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('cardNumber') ? 'error' : ''
                            }
                          ></InputMask>
                        </div>
                        <div>
                          <label htmlFor="cardCode">CVV</label>
                          <InputMask
                            mask="999"
                            id="cardCode"
                            name="cardCode"
                            type="text"
                            value={form.values.cardCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('cardCode') ? 'error' : ''
                            }
                          ></InputMask>
                        </div>
                      </div>
                      <div>
                        <div>
                          <label htmlFor="expiresMonth">
                            Mês de vencimento
                          </label>
                          <InputMask
                            mask="99"
                            id="expiresMonth"
                            type="text"
                            name="expiresMonth"
                            value={form.values.expiresMonth}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('expiresMonth') ? 'error' : ''
                            }
                          ></InputMask>
                        </div>
                        <div>
                          <label htmlFor="expiresYear">Ano de vencimento</label>
                          <InputMask
                            mask="99"
                            id="expiresYear"
                            type="text"
                            name="expiresYear"
                            value={form.values.expiresYear}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('expiresYear') ? 'error' : ''
                            }
                          ></InputMask>
                        </div>
                      </div>
                    </S.FormCheckout>
                    <S.ButtonCheckout
                      title="Clique aqui para finalizar o pagamento"
                      type="submit"
                      onClick={() => form.handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
                    </S.ButtonCheckout>
                    <S.ButtonCheckout
                      title="Clique aqui para editar o endereço"
                      type="button"
                      onClick={() => setPayment(false)}
                    >
                      Voltar para a edição de endereço
                    </S.ButtonCheckout>
                  </>
                ) : (
                  <>
                    <S.FormCheckout>
                      <h3>Entrega</h3>
                      <label htmlFor="receiver">Quem irá receber</label>
                      <input
                        id="receiver"
                        type="text"
                        name="receiver"
                        value={form.values.receiver}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('receiver') ? 'error' : ''
                        }
                      ></input>
                      <label htmlFor="description">Endereço</label>
                      <input
                        id="description"
                        type="text"
                        name="description"
                        value={form.values.description}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('description') ? 'error' : ''
                        }
                      ></input>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('city') ? 'error' : ''}
                      ></input>
                      <div>
                        <div>
                          <label htmlFor="zipCode">CEP</label>
                          <InputMask
                            mask="99.999-99"
                            id="zipCode"
                            type="text"
                            name="zipCode"
                            value={form.values.zipCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('zipCode') ? 'error' : ''
                            }
                          ></InputMask>
                        </div>
                        <div>
                          <label htmlFor="number">Número</label>
                          <input
                            id="number"
                            type="text"
                            name="number"
                            value={form.values.number}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('number') ? 'error' : ''
                            }
                          ></input>
                        </div>
                      </div>
                      <label htmlFor="complement">Complemento (opcional)</label>
                      <input
                        id="complement"
                        type="text"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('complement') ? 'error' : ''
                        }
                      ></input>
                    </S.FormCheckout>
                    <S.ButtonCheckout
                      title="Clique aqui para ir ao pagamento"
                      onClick={() => setPayment(true)}
                    >
                      Continue com o pagamento
                    </S.ButtonCheckout>
                    <S.ButtonCheckout
                      title="Clique aqui para voltar ao carrinho"
                      type="button"
                      onClick={goToCart}
                    >
                      Voltar para o carrinho
                    </S.ButtonCheckout>
                  </>
                )
              ) : (
                <>
                  <p className="empty-text">
                    O carrinho está vazio, adicione pelo menos um produto para
                    continuar a compra.
                  </p>
                  <S.ButtonCheckout
                    title="Clique aqui para voltar ao carrinho"
                    type="button"
                    onClick={goToCart}
                  >
                    Voltar para o carrinho
                  </S.ButtonCheckout>
                </>
              )}
            </form>
          </>
        )}
      </S.Sidebar>
    </S.CheckoutContainer>
  )
}

export default Checkout
