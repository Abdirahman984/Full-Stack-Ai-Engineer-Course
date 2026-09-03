import React, { useContext } from 'react'
import cartContext from './shopping'

const ShoppingCart = ({itemId, itemName, price}) => {
    const { addToCart } = useContext(cartContext)

    const handleAdd = () => {
        addToCart({ id: itemId, name: itemName, price })
    }
    return (
        <div>
            <p>{itemName}</p>
            <p>Price: ${price}</p>
            <button onClick={handleAdd}>Add to Cart</button>
        </div>
    )
}

export default ShoppingCart;