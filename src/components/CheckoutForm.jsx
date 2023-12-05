import { useState } from "react"


const CheckoutForm = ({ onConfirm }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name,
            phone,
            email
        }

        onConfirm(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm}>
                <label htmlFor="name">Nombre</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={ ( { target } ) => setName(target.value)  }
                />
                <label htmlFor="phone">Telefono</label>
                <input
                    id="phone"
                    type="number"
                    min="0"
                    value={phone}
                    onChange={ ( { target } ) => setPhone(target.value)  }
                />
                <label htmlFor="email">e-mail</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={ ( { target } ) => setEmail(target.value)  }
                />
                <button type="submit">Crear Orden</button>
            </form>
        </div>
    )
}

export default CheckoutForm