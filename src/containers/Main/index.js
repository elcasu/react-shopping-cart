import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import Product from 'models/Product'
import Cart from 'models/Cart'
import ProductList from 'components/ProductList'
import './main.css'

// TODO: add tests for this component once we have it working.
function App() {
  // For now, we'll define the state of the application in this
  // main component.
  // TODO: Later, we'll use the Context to share the state.
  // And then, we'll switch to Redux to handle de application state.
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState(new Cart())

  useEffect(() => {
    async function fetchData() {
      setProducts(await Product.getProducts())
    }
    fetchData()
  }, [])

  const handleAddToCart = product => {
    cart.addItem(product)
    setCart(cart.clone())
  }

  return (
    <div className="main">
      <header className="header">
        <p>
          Lets put the shopping cart header here
        </p>
      </header>
      <section className="body">
        <ProductList
          products={products}
          cart={cart}
          onAddToCart={handleAddToCart}
        />
      </section>
    </div>
  )
}

export default App
