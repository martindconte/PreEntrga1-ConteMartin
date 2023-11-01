import imgCarrito from '../img/header-carrito.svg'

function CartWidget() {
  return (
    <a className='cartWidget'  href='/'>
      <img src={imgCarrito} alt="imagen corrito de compras" />
      <span>4</span>
    </a>
  )
}

export default CartWidget