import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'

type ProductsParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as ProductsParams

  return (
    <>
      <Header />
      <Hero id={id} />
      <ProductList id={id} />
    </>
  )
}

export default Perfil
