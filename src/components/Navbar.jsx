import { ShoppingCart } from 'lucide-react'

const Navbar = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-violet-600">DigiTools</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-violet-600 transition-colors">Products</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Testimonials</a>
          <a href="#" className="hover:text-violet-600 transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-violet-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
          <a href="#" className="hidden sm:block text-gray-600 hover:text-violet-600 font-medium px-4">Login</a>
          <button className="btn bg-violet-600 hover:bg-violet-700 text-white border-none rounded-lg px-6">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
