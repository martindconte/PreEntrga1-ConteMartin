import Item from './Item'

function ItemList( { products }) {

        return (

    <>
      {products?.length ? (

        products.map(product => (

          product.stock > 0 &&
          <Item key={product.id} product={product} />
        ))
        
      )
       : <p>Cargando...</p>  }
    
    {/* <div>ItemList</div> */}
    
    </>
  )
}

export default ItemList