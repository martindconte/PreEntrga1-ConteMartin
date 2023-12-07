import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({ cart: [] })

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState( [] )

    console.log(cart)

    useEffect(() => {
        // Verifico si hay datos en LS al montar el componente
        const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
        console.log(cartLS)
        setCart(cartLS);
    }, []);
    
    useEffect(() => {
        // Actualizo el localStorage cuando el carrito cambie
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prod => [...prod, { ...item, quantity }])
           console.log(cart)
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