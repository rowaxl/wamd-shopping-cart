import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    marginTop: 40,
    marginBottom: 12,
  },
  cartWrap: {
    width: '100%',
    height: 350,
    background: '#ddd',
    marginTop: 12,
    overflowY: 'scroll',
  },
  emptyText: {
    textAlign: 'center',
  },
  itemsTexts: {
    width: '33%',
    textAlign: 'left',
  },
  quantityTexts: {
    width: '33%',
    textAlign: 'center',
  },
  priceTexts: {
    width: '33%',
    textAlign: 'right',
  },
  headerText: {
    width: '33%',
    textAlign: 'center',

    '& > span': {
      fontWeight: 900,
      fontSize: '1.2em',
    }
  }
}))

const Cart = ({ cartItems }) => {
  const styles = useStyles()

  const renderItems = () => 
    cartItems.map(item => (
      <ListItem key={item.id}>
        <ListItemText className={styles.itemsTexts}>{item.item}</ListItemText>
        <ListItemText className={styles.quantityTexts}>{item.quantity}</ListItemText>
        <ListItemText className={styles.priceTexts}>${(item.quantity * item.price).toFixed(2)}</ListItemText>
      </ListItem>
    ))

  const renderTotal = () => {
    if (!cartItems.length) return <></>

    return 'Total: $ ' + cartItems.reduce((a, c) => a + (c.quantity * c.price), 0).toFixed(2)
  }

  return (
    <div className={styles.container}>
      <Typography variant="h3">
        Shopping Carts
      </Typography>

      <div className={styles.cartWrap}>
        {
          cartItems.length > 0
            ? <List>
                <ListItem>
                  <ListItemText className={styles.headerText}>
                    Item
                  </ListItemText>
                  <ListItemText className={styles.headerText}>
                    Quantity
                  </ListItemText>
                  <ListItemText className={styles.headerText}>
                    Subtotal
                  </ListItemText>
                </ListItem>
                {renderItems()}
              </List>
            : <Typography className={styles.emptyText} variant="h6">Cart is Empty!</Typography>
        }
      </div>

      <Typography align="right" variant="h5">{renderTotal()}</Typography>
    </div>
  )
}

export default Cart
