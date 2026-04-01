import ProductGrid from './ProductGrid'
import CartView from './CartView'

const MainSection = ({ activeTab, setActiveTab, products, cart, addToCart, removeFromCart, proceedToCheckout }) => {
  return (
    <section className="py-20 bg-gray-50/50 rounded-[48px] px-8 md:px-16 shadow-inner border border-gray-100">
      <div className="text-center space-y-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Premium Digital Tools
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="inline-flex bg-white p-2 rounded-2xl shadow-xl shadow-violet-100 border border-gray-100">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === 'products'
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-200'
                : 'text-gray-500 hover:text-violet-600 hover:bg-violet-50'
              }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('cart')}
            className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'cart'
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-200'
                : 'text-gray-500 hover:text-violet-600 hover:bg-violet-50'
              }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      <div className="transition-all duration-500 ease-in-out">
        {activeTab === 'products' ? (
          <ProductGrid
            products={products}
            addToCart={addToCart}
            cartCount={cart.length}
          />
        ) : (
          <CartView
            cart={cart}
            removeFromCart={removeFromCart}
            proceedToCheckout={proceedToCheckout}
          />
        )}
      </div>
    </section>
  )
}

export default MainSection
