import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import {CartContext}  from '../contexts/cart.context'



import './cart-dropdown.styles.scss'

export default function CartDropdown() {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/check-out')
  }
  console.log(cartItems)
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
          {cartItems.map((item) => (
            <CartItem key={item.id} products={item}/>
            ))}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  )
}
