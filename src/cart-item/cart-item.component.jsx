import React from 'react'

export default function CartItem({products}) {
    const {name, quantity} = products;
  return (
    <div className='cart-item-container'>
        <h2>{name}</h2>
        <span>{quantity}</span>
    </div>
  )
}
