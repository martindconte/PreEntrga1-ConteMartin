import Item from './Item'

function ItemList({ products }) {

  console.log(products)
  return (

    <>
      {
        // products?.length ? (

          products.map(product => (

            // product.stock > 0 &&
            <Item key={product.id} {...product} />
          ))

        // ) : <p>Cargando...</p>
      }

      {/* <div>ItemList</div> */}

    </>
  )
}

export default ItemList