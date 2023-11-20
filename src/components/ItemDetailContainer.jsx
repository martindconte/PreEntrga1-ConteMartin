import { useState, useEffect } from "react"
import { getProductsById } from "../data/asyncMock"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

// function ItemDetailContainer() {

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const { itemId } = useParams()
    console.log(itemId)

    useEffect(() => {
      // getProductsById('E1Bkc')
      // getProductsById('hficF')
      getProductsById(itemId)
        .then(response => setProduct(response))
        .catch(error => console.error(error))

    }, [])
    
  return (
    <>
        <ItemDetail product={product} />
    </>
  )
}

export default ItemDetailContainer