import { Trash2 } from 'lucide-react'

const CartItem = ({ item, index, removeFromCart }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 bg-gray-50 p-3 rounded-2xl border border-gray-100 flex items-center justify-center shrink-0">
          <img src={item.icon} alt={item.name} className="w-full h-auto" />
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors">{item.name}</h4>
          <p className="text-gray-400 font-medium">${item.price}</p>
        </div>
      </div>
      
      <button 
        onClick={() => removeFromCart(index)}
        className="text-rose-500 hover:text-rose-600 font-bold px-6 py-3 rounded-xl hover:bg-rose-50 transition-all"
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem
