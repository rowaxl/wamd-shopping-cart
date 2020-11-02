import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {
  Delete as DeleteIcon
} from '@material-ui/icons'
import '../styles/cart.scss'

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
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  totalWrap: {
    width: '100%',
    display: 'flex',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  checkoutButtonsWrap: {
    width: 250,
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

const Cart = ({ cartItems, handleDelete, handleDeleteAll }) => {
  const styles = useStyles()

  const renderItems = () => 
    cartItems.map(item => (
      <ListItem key={item.id}>
        <ListItemText className={styles.itemsTexts}>{item.item}</ListItemText>
        <ListItemText className={styles.quantityTexts}>{item.quantity}</ListItemText>
        <ListItemText className={styles.priceTexts}>${(item.quantity * item.price).toFixed(2)}</ListItemText>
        <ListItemSecondaryAction className="btn-delete">
          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
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

      <div className={styles.totalWrap}>
        <Typography align="right" variant="h5">{renderTotal()}</Typography>

        <div className={styles.checkoutButtonsWrap}>
          <Button className="btn-checkout" variant="contained">Checkout</Button>
          <Button className="btn-remove-all" variant="contained" onClick={handleDeleteAll}>Remove All</Button>
        </div>
      </div>
    </div>
  )
}

export default Cart
