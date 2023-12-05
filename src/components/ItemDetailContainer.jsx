import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/clients"


const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()


  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'productos', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = {
          id: response.id,
          ...data
        }
        setProduct(productAdapted)
      })
      .catch(error => console.log(error))
      .finally(setLoading(false))

  }, [itemId])
  


  return (
    <>

      <ItemDetail {...product} />
    </>
  )
}

export default ItemDetailContainer