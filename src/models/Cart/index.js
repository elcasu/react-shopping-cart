class Cart {
  constructor() {
    this.items = []
  }

  addItem(product) {
    const existingItem = this.items.find(i => i.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      this.items.push({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
      })
    }
  }

  removeItem(item) {
    if (!this.items.find(i => i.id === item.id)) {
      throw new Error('Error: product does not exist in the cart')
    }
    this.items = this.items.filter(i => i.id !== item.id)
  }

  getItem(product) {
    return this.items.find(item => item.id === product.id)
  }
}

export default Cart