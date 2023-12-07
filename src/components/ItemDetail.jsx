import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

function ItemDetail({ id, marca, modelo, origen, tipo, descripcion, imagen, precio, stock }) {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,
            marca,
            modelo,
            origen,
            descripcion,
            imagen,
            precio
        }

        addItem(item, quantity)
    }

    return (

        <div className="itemDetail__container">
            <div className="itemDetail">
                <div className="itemDetail__imagen" >
                    <img src={imagen} alt={imagen} />
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
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className="contador__btn"> Finalizar Compra </Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail