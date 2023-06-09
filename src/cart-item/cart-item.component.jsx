import './cart-item.styles.scss'

export default function CartItem({products}) {
    const {name, imageUrl , price, quantity} = products;
  return (
    <div className='cart-item-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>

    </div>
  )
}
