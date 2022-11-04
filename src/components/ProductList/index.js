import Product from 'components/Product'
import './styles.scss'

const ProductList = (props) => {
  const {
    products,
    cart,
    onAddToCart,
  } = props

  return (
    <div className='product-list'>
      {
        products.map(product => (
          <Product
            key={product.id}
            product={product}
            cart={cart}
            onAddToCart={onAddToCart}
          />
        ))
      }
    </div>
  )
}

export default ProductList
