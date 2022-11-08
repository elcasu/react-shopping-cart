import './styles.scss'

const Product = (props) => {
  const {
    product,
    cart,
    onAddToCart,
  } = props
  const cartItem = cart.getItem(product)
  const badgeText = cartItem ? `${cartItem.quantity} items in cart` : null

  const handleAddToCart = () => {
    onAddToCart(product)
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
            onClick={handleAddToCart}
          >Add to cart</button>
          <button className="add-to-cart btn btn-outline-primary btn-lg">View details</button>
        </div>
      </div>
    </div>
  )
}

export default Product
