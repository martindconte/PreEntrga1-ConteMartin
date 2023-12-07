import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({ cart: [] })

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState( [] )

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prod => [...prod, { ...item, quantity }])
        } else {
            console.error('El producto ya se encuentra cargado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(producto => producto.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(producto => producto.id === itemId)
    }

    const totalQuantity = cart.reduce((total, prod) => total + prod.quantity, 0);
    const total = cart.reduce((total, prod) => total + (prod.precio*prod.quantity), 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}