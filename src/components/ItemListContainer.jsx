import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import ItemList from './ItemList'
// import { getProducts, getProductsByCategory } from '../data/asyncMock'
import { db } from '../firebase/clients'

function ItemListContainer({ greeting }) {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const  { categoryId }  = useParams()
 
  useEffect(() => {
    setLoading(true)

    const collectionRef = categoryId
      ? query(collection(db, 'productos'), where('category', '==', categoryId))
      : collection(db, 'productos')

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          console.log(data)
          return {
            id: doc.id,
            ...data
          }
        })
        setProducts(productsAdapted)
      })
      .catch (error => console.log(error))
      .finally( () => setLoading(false) )
    // const asyncFunc = categoryId ? getProductsByCategory : getProducts

    // asyncFunc(categoryId)
    //   .then(response => setProducts(response))
    //   .catch(error => console.error(error))

  }, [categoryId])

  return (
    <div className='itemListContainer'>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer