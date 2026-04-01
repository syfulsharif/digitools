import { CheckCircle2, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

const ProductCard = ({ product, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full hover:shadow-2xl hover:shadow-violet-100 hover:-translate-y-2 transition-all duration-300 relative group">
      {/* Tag */}
      <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
        product.tagType === 'warning' ? 'bg-amber-100 text-amber-700' :
        product.tagType === 'info' ? 'bg-sky-100 text-sky-700' :
        'bg-emerald-100 text-emerald-700'
      }`}>
        {product.tag}
      </div>

      {/* Icon */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-violet-600/10 rounded-2xl blur-xl transition-all group-hover:scale-150"></div>
        <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center p-3 relative bg-white border border-violet-100 shadow-sm">
          <img src={product.icon} alt={product.name} className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          {product.description}
        </p>

        <div className="pt-2">
          <span className="text-3xl font-extrabold text-gray-900">${product.price}</span>
          <span className="text-gray-400 font-medium text-sm ml-1">
            /{product.period === 'monthly' ? 'Mo' : product.period === 'yearly' ? 'Yr' : 'One-Time'}
          </span>
        </div>

        {/* Features */}
        <ul className="space-y-3 pt-4">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button 
        onClick={handleAddToCart}
        disabled={isAdded}
        className={`w-full mt-10 h-14 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
          isAdded 
            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200' 
            : 'bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-200'
        }`}
      >
        <ShoppingCart className="w-5 h-5" />
        {isAdded ? "Added to cart" : "Buy Now"}
      </button>
    </div>
  )
}

export default ProductCard
