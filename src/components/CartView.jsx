import CartItem from './CartItem'
import { AlertCircle, CreditCard } from 'lucide-react'

const CartView = ({ cart, removeFromCart, proceedToCheckout }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-8 bg-white rounded-3xl border-2 border-dashed border-gray-200 animate-fade-in">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-10 h-10 text-gray-300" />
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Your cart is empty</h3>
        <p className="text-gray-500 mb-8 max-w-sm text-center">Add some premium tools to your cart to see them here and start your digital journey.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="space-y-4">
        {cart.map((item, index) => (
          <CartItem 
            key={`${item.id}-${index}`} 
            item={item} 
            index={index}
            removeFromCart={removeFromCart} 
          />
        ))}
      </div>

      <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-200/50 space-y-6">
        <div className="flex justify-between items-center px-4">
          <span className="text-xl font-bold text-gray-500">Total:</span>
          <span className="text-4xl font-extrabold text-gray-900">${totalPrice}</span>
        </div>
        
        <button 
          onClick={proceedToCheckout}
          className="w-full h-16 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-violet-200 active:scale-[0.98]"
        >
          <CreditCard className="w-6 h-6" />
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default CartView
