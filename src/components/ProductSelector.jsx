import React, { useState } from 'react'
import {
  Select,
  FormControl,
  InputLabel,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  wrap: {
    width: '100%',
    display: 'flex',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formControl: {
    margin: 8,
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: 8,
  },
}))

const ProductSelector = ({ products, addItem }) => {
  const [selected, setSelected] = useState(0)
  const styles = useStyles()

  const handleChange = (event) => {
    const value = parseInt(event.target.value)

    setSelected(value)
  }

  const handleSubmit = () => {
    addItem(selected)

    setSelected(0)
  }

  return (
    <div className={styles.wrap}>
      <FormControl className={styles.formControl}>
        <InputLabel htmlFor="product-selector">Products</InputLabel>
        <Select
          native
          value={selected}
          onChange={handleChange}
          inputProps={{
            name: 'products',
            id: 'product-selector'
          }}
        >

          <option aria-label="None" value={0}>None</option>
          {
            products.map(item => (
              <option key={item.id} value={item.id}>{item.item}: ${item.price}</option>
            ))
          }
        </Select>
      </FormControl>
      <Button color="primary" variant="contained" onClick={handleSubmit}>Add to Cart</Button>
    </div>
  )
}

export default ProductSelector
