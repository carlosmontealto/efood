import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'
import { useGetProductsQuery } from '../../services/api'

type ProductsParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as ProductsParams
  const { data: products, isLoading } = useGetProductsQuery(id)

  return (
    <>
      <Header />
      <Hero products={products} isLoading={isLoading} />
      <ProductList products={products} isLoading={isLoading} />
    </>
  )
}

export default Perfil
