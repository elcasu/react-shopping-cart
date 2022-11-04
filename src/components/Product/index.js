import { useState } from 'react'
import './styles.scss'

const Product = (props) => {
  const {
    product,
    cart,
  } = props
  const [cartItem, setCartItem] = useState(cart.getItem(product))
  const badgeText = cartItem ? `${cartItem.quantity} items in cart` : null

  // NOTE: This is a HACK! Basically, we're forcing the component
  // to re-render. We'll get this fixed later, when we use Context
  // or Redux to manage the state.
  // The issue here is that "cart" is an instance of Cart. When we call the
  // "addItem()" method (even in the parent component), the cart object changes
  // (i.e. cart.items[i].quantity increments), but the reference to the object
  // remains the same, so React doesn't know that something changed.
  const handleCartClick = () => {
    setCartItem({
      ...cart.addItem(product)
    })
  }

  return (
    <div className="product-item d-flex justify-content-between">
      <div>
        <div className="title">${product.title}</div>
        <div className="product-item-img">
          <img
            src={product.image}
            alt={product.title}
            width="150"
          />
        </div>
      </div>
      <div className="position-relative">
        <div>
          <div className="price">{`$${product.price}`}</div>
          <div className="badge rounded-pill bg-primary product-badge">{badgeText}</div>
        </div>
        <div className="description">{product.description}</div>
        <div className="actions mt-5 d-flex justify-content-between">
          <button
            className="add-to-cart btn btn-success btn-lg"
            onClick={handleCartClick}
          >Add to cart</button>
          <button className="add-to-cart btn btn-outline-primary btn-lg">View details</button>
        </div>
      </div>
    </div>
  )
}

export default Product
