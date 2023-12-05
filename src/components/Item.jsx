import { Link } from "react-router-dom"

function Item( { id, marca, modelo, tipo, origen, descripcion, imagen, precio, stock } ) {

    // const { id, marca, modelo, tipo, origen, descripcion, imagen, precio, stock } = product

    // const imgBasePath = '/public/img'

    return (
        <div className="tarjeta">
            <div className="tarjeta__imagen" >
                {/* <img src={`public/img/${imagen}`} alt="imagen producto" /> */}
                {/* <img src={`${imgBasePath}/${imagen}`} alt={imagen} /> */}
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