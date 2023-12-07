import { Link } from "react-router-dom"

function Item( { id, marca, modelo, origen, descripcion, imagen, precio, stock } ) {

    return (
        <div className="tarjeta">
            <div className="tarjeta__imagen" >
                <img src={imagen} alt="" />
            </div>
            <div className="tarjeta__descripcion">
                <p className="titulo">{marca} {modelo} {origen} </p>
                <p>{descripcion}</p>
                <p><span>Stock: </span>{stock}</p>
                <p className="titulo">{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(precio)}</p>
            </div>
            <div className="tarjeta__botones">
                <Link to={`/item/${id}`} className="btnCarrito">Ver Detalle</Link>
            </div>
        </div>
    )
}

export default Item