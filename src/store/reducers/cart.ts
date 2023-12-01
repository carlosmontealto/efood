import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Product[]
  isOpenCart: boolean
  isOpenCheckout: boolean
}

const initialState: CartState = {
  items: [],
  isOpenCart: false,
  isOpenCheckout: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const product = state.items.find((item) => item.id === action.payload.id)

      if (!product) {
        state.items.push(action.payload)
      } else {
        alert('O prato já foi adicionado ao carrinho.')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openCart: (state) => {
      state.isOpenCart = true
    },
    closeCart: (state) => {
      state.isOpenCart = false
    },
    openCheckout: (state) => {
      state.isOpenCheckout = true
    },
    closeCheckout: (state) => {
      state.isOpenCheckout = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const {
  add,
  openCart,
  closeCart,
  remove,
  clear,
  closeCheckout,
  openCheckout
} = cartSlice.actions
export default cartSlice.reducer
