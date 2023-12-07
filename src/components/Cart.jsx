import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'

const Cart = () => {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)
    
    if ( totalQuantity === 0 ) {
        return (
            <div className='cart-empty'>
                <h2>CARRITO VACIO</h2>
                <Link to='/' > Productos </Link>
            </div>
        )
    }

    return (
        <div className='cart-container'>
            <div className='cart-products'>
                {
                    cart.map( ( prod ) => <CartItem key={prod.id} {...prod} /> )
                }
            </div>
            <div className='cart-buy'>
                <h3>Total: <span >{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(total)}</span> </h3>
                <button onClick={() => clearCart()}> Limpiar Carrito </button>
                <Link to='/checkout'>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart