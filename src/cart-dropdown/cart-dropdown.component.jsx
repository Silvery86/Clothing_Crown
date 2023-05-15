import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import './cart-dropdown.styles.scss'
import {CartContext}  from '../contexts/cart.context'

export default function CartDropdown() {
  const {cartItems} = useContext(CartContext)
  console.log(cartItems)
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
          {cartItems.map((item) => (
            <CartItem key={item.id} products={item}/>
            ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}