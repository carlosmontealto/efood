import { useEffect, useState } from 'react'

import { parseToBrl } from '../../utils'

import * as S from './styles'
import closeIcon from '../../assets/images/close-icon.svg'

type Props = {
  id: string
}

const ProductList = ({ id }: Props) => {
  const [products, setProducts] = useState<Restaurant>()
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    url: '',
    name: '',
    description: '',
    price: 0,
    portion: ''
  })

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [id])

  function closeModal() {
    setModal({
      isVisible: false,
      url: '',
      name: '',
      description: '',
      price: 0,
      portion: ''
    })
  }

  if (!products) {
    return <h3>Carregando...</h3>
  }

  return (
    <div className="container">
      <section>
        <S.List>
          {products.cardapio.map((product) => (
            <S.Product key={product.id}>
              <img src={product.foto} alt={product.nome} />
              <S.Title>{product.nome}</S.Title>
              <S.Description>{product.descricao}</S.Description>
              <S.Button
                type="button"
                onClick={() => {
                  setModal({
                    isVisible: true,
                    url: product.foto,
                    name: product.nome,
                    description: product.descricao,
                    portion: product.porcao,
                    price: product.preco
                  })
                }}
              >
                Mais detalhes
              </S.Button>
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
              <S.ButtonModal type="button">
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

export default ProductList
