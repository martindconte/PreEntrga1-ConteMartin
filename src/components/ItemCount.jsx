import React, { useState } from 'react'

function ItemCount( { stock, initial, onAdd } ) {

  const [ quantity, setQuantity ] = useState(initial)
  
  const increment = () => (quantity < stock) && setQuantity(quantity + 1)
  const decrement = () => (quantity > 1 ) && setQuantity(quantity - 1) 
  
  return (
    <div className='contador'>
      <div className='contador__controles'>
        <button className='contador__btn' onClick={decrement}> - </button>
        <span> {quantity} </span>
        <button className='contador__btn' onClick={increment}> + </button>
      </div>
      <button className='contador__btn' onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount