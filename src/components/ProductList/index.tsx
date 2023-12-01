import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Loader from '../Loader'

import { parseToBrl } from '../../utils'
import { openCart, add } from '../../store/reducers/cart'

import * as S from './styles'
import { Button } from '../../styles'

import closeIcon from '../../assets/images/close-icon.svg'

type Props = {
  products?: Restaurant
  isLoading: boolean
}

const clearModal = {
  isVisible: false,
  url: '',
  name: '',
  description: '',
  price: 0,
  portion: '',
  product: {
    descricao: '',
    foto: '',
    id: 0,
    nome: '',
    porcao: '',
    preco: 0
  }
}

const ProductList = ({ isLoading, products }: Props) => {
  const [modal, setModal] = useState<ModalState>(clearModal)

  const dispatch = useDispatch()

  function closeModal() {
    setModal(clearModal)
  }

  function adicionarAoCarrinho(addProduct: Product) {
    dispatch(add(addProduct))
    closeModal()
    dispatch(openCart())
  }

  if (isLoading) {
    return <Loader />
  }

  if (products) {
    return (
      <div className="container">
        <section>
          <S.List>
            {products.cardapio.map((product) => (
              <S.Product key={product.id}>
                <img src={product.foto} alt={product.nome} />
                <S.Title>{product.nome}</S.Title>
                <S.Description>{product.descricao}</S.Description>
                <Button
                  type="button"
                  onClick={() => {
                    setModal({
                      isVisible: true,
                      url: product.foto,
                      name: product.nome,
                      description: product.descricao,
                      portion: product.porcao,
                      price: product.preco,
                      product: product
                    })
                  }}
                >
                  Mais detalhes
                </Button>
              </S.Product>
            ))}
          </S.List>
        </section>
        <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
          <S.ModalContent className="container">
            <header>
              <img src={modal.url} />
              <img
                className="closeIcon"
                onClick={closeModal}
                src={closeIcon}
                alt="Ícone de fechar"
              />
              <div className="contentContainer">
                <h4>{modal.name}</h4>
                <p>
                  {modal.description} <br /> <br /> Serve: de{' '}
                  <span>{modal.portion}</span>
                </p>
                <S.ButtonModal
                  type="button"
                  onClick={() => adicionarAoCarrinho(modal.product)}
                >
                  Adicionar ao carrinho - <span>{parseToBrl(modal.price)}</span>
                </S.ButtonModal>
              </div>
            </header>
          </S.ModalContent>
          <div onClick={closeModal} className="overlay"></div>
        </S.Modal>
      </div>
    )
  }
  return <></>
}
export default ProductList
