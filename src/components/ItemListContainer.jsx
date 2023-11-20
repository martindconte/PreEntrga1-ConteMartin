import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getProducts, getProductsByCategory } from '../data/asyncMock'
import { useParams } from 'react-router-dom'


function ItemListContainer({ greeting }) {

  const [products, setProducts] = useState([])

  const  { categoryId }  = useParams()
  console.log(categoryId)
 

  useEffect(() => {

    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
      .then(response => setProducts(response))
      .catch(error => console.error(error))

  }, [categoryId])

  return (
    <div className='itemListContainer'>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer