import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import MainSection from './components/MainSection'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import productsData from './data/products.json'
import { toast } from 'react-toastify'

function App() {
  const [cart, setCart] = useState([])
  const [activeTab, setActiveTab] = useState('products') // 'products' or 'cart'

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
    toast.success(`${product.name} added to cart!`)
  }

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart]
      const removedItem = newCart.splice(index, 1)[0]
      toast.info(`${removedItem.name} removed from cart.`)
      return newCart
    })
  }

  const proceedToCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is empty!")
      return
    }
    setCart([])
    setActiveTab('products')
    toast.success("Proceeding to checkout! Cart cleared.")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cart.length} />
      <Hero />
      <Stats />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <MainSection 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          products={productsData}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          proceedToCheckout={proceedToCheckout}
        />
      </main>

      <Steps />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
