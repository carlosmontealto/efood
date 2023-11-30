declare type Product = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Product[]
}

declare type ModalState = {
  isVisible: boolean
  url: string
  name: string
  description: string
  price: number
  portion: string
  product: Product
}
