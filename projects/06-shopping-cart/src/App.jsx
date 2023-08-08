import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App () {
  return (
    <CartProvider>
      <Header />
      <Products />
      <Footer />
      <Cart />
    </CartProvider>
  )
}

export default App
