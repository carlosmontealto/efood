import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import PersonalizedRoute from './routes'

import Footer from './components/Footer'
import Cart from './components/Cart'
import store from './store'

import { GlobalCss } from './styles'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <PersonalizedRoute />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
