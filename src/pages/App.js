import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import TodoSelector from '../components/TodoSelector'
import Cart from '../components/Cart'
import { makeStyles } from '@material-ui/styles'

const products = [
  {
    id: 1,
    item: 'Camera',
    price: 500
  },
  {
    id: 2,
    item: 'Shoes',
    price: 150
  },
  {
    id: 3,
    item: 'Hand Bag',
    price: 700
  },
  {
    id: 4,
    item: 'Smart Phone',
    price: 1200
  },
  {
    id: 5,
    item: 'Sweater',
    price: 120
  },
  {
    id: 6,
    item: 'Watch',
    price: 600
  },
  {
    id: 7,
    item: 'Headphones',
    price: 300
  },
  {
    id: 8,
    item: 'Book',
    price: 20
  },
  {
    id: 9,
    item: 'Ring',
    price: 3000
  }
]


const useStyles = makeStyles(() => ({
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    textAlign: 'center'
  }
}))

const App = () => {
  const styles = useStyles()
  const [cartItems, setCartItems] = useState([])

  const handleAddItem = (itemId) => {
    if (!itemId) return

    const target = products.find(product => product.id === itemId)
    const cartIndex = cartItems.findIndex(item => item.id === target.id)
    const newCartItems = [...cartItems]

    console.log(target)

    if (cartIndex > -1) {
      newCartItems[cartIndex].quantity += 1
    } else {
      newCartItems.push({ ...target, quantity: 1 })
    }

    setCartItems(newCartItems)
  }

  return (
    <Container maxWidth="md">
      <Cart cartItems={cartItems} />
      <TodoSelector products={products} addItem={handleAddItem} />

      <footer className={styles.footer}>
        &copy; 2020 wonjae kim
      </footer>
    </Container>
  );
}

export default App
