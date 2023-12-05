import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { db } from '../firebase/clients'
import CheckoutForm from './CheckoutForm'


const Checkout = () => {

  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState("")

  const { cart, total, clearCart } = useContext(CartContext)

  const createOrder = async ( { name, phone, email } ) => {

    setLoading(true)

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email
        },
        items: cart,
        total,
        date: Timestamp.fromDate(new Date())
      }

      const batch = writeBatch(db)
      const outOfStock = []
      const ids = cart.map( producto => producto.id )
      const productsRef = collection(db, 'productos')

      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
      console.log(productsAddedFromFirestore)
      const { docs } = productsAddedFromFirestore

      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(producto => producto.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity

        stockDb >= prodQuantity
          ? batch.update( doc.ref, { stock: stockDb - prodQuantity } )
          : outOfStock.push( { id: doc.id, ...dataDoc })
      });

      if(outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')
        const orderAdded = await addDoc(orderRef, objOrder)

        setOrderId(orderAdded.id)
        clearCart()

      } else {
        console.error('Hay Productos que no tienen Stock')
      }



    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }

  }

  if(loading) {return <h1 className='checkout'>Generando orden...</h1>}

  if(orderId) {return <h1 className='checkout'>Orden Generada: { orderId } </h1>}

  return (
    <div className='checkout'>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={ createOrder }  />
    </div>
  )
}

export default Checkout