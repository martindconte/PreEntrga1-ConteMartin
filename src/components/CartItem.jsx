import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({ id, marca, modelo, origen, imagen, quantity, precio }) => {

  const { cart, removeItem } = useContext(CartContext)

  console.log(cart)
  return (
    <article className='cartItem'>
      <img src={imagen} alt={imagen} />
      <div className='cartItem__title'>
          <p> {marca} </p>
          <p> {modelo} </p>
          <p> {origen} </p>
      </div>
      <div>
        <p> Cantidad: {quantity} </p>
        <p> Precio Unitario: <span >{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(precio)}</span></p>
      </div>
      <div className='cartItem__delete'>
        <p> Subtotal  <span >{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(precio*quantity)}</span> </p>
        <button onClick={() => removeItem(id)}> ELIMINAR </button>
      </div>
    </article>

  )
}

export default CartItem