import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import imgCarrito from '../img/header-carrito.svg'
import { Link } from 'react-router-dom'

function CartWidget() {

  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className='cartWidget' style={{ display: totalQuantity > 0 ? 'flex' : 'none' }}>
      <img src={imgCarrito} alt="imagen corrito de compras" />
      <span> {totalQuantity} </span>
    </Link>
  )
}

export default CartWidget