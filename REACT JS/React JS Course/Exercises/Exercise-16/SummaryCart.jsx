import React, { useContext } from 'react'
import cartContext from './shopping'

const SummaryCart = () => {
    const {cartItem, removeFromCart} = useContext(cartContext)
    return (
        <div>
            <h2>Cart Summary</h2>
            <p>Total Items: {cartItem.length}</p>
            <ul>
                {cartItem.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}{' '}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SummaryCart;