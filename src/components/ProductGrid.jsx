import ProductCard from './ProductCard'

const ProductGrid = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 animate-fade-in">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </div>
  )
}

export default ProductGrid
