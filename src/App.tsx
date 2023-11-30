import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { GlobalCss } from './styles'
import PersonalizedRoute from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <PersonalizedRoute />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
