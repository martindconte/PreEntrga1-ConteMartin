import ItemCount from "./itemCount"

function ItemDetail({ product }) {

    const imgBasePath = '/public/img'
    const { marca, modelo, origen, tipo, descripcion, imagen, precio, stock } = product

    return (

        <>
            {
                Object.keys(product).length > 0 ? (
                    <div className="itemDetail">
                        <div className="itemDetail__imagen" >
                            <img src={`${imgBasePath}/${imagen}`} alt={imagen} />
                        </div>
                        <div className="itemDetail__descripcion">
                            <p><span>Marca: </span>{marca}</p>
                            <p><span>Modelo: </span>{modelo}</p>
                            <p><span>Orige: </span>{origen}</p>
                            <p><span>Tipo: </span>{tipo}</p>
                            <p>{descripcion}</p>
                        </div>
                        <div className="itemDetail__botones">
                            <p> <span>Precio: </span> {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(precio)}</p>
                            <p><span>Stock: </span>{stock}</p>
                            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log(quantity)} />
                        </div>
                    </div>

                ) : <p className="itemDetail">Cargando...</p>

            }
            {/* {console.log(Object.keys(product).length)} */}

        </>
    )
}

export default ItemDetail