import CartWidget from '../CartWidget/CartWidget';
import logo from '../img/header-logo-menu.svg';
import imgLogueo from '../img/header-logueo.svg'

function NavBar() {
    return (
        <nav className='navBar'>
            <div className='navBar__logo'>
                <a href="/">
                    <img src={logo} alt="logo pagina" />
                    <h1>GCFMusic</h1>
                </a>
            </div>
            <div className='navBar__nav'>
                <ul className='navBar__menu'>
                    <li>
                        <a href="/categorias">Categorias</a>
                        <ul className='navBar__submenu'>
                            <li>
                                <a href="/productos/categoria/guitarra">Guitarras</a>
                            </li>
                            <li>
                                <a href="/productos/categoria/bajo">Bajos</a>
                            </li>
                            <li>
                                <a href="/productos/categoria/bateria">Baterias</a>
                            </li>
                            <li>
                                <a href="/productos/categoria/teclado">Teclados</a>
                            </li>
                            <li>
                                <a href="/productos/categoria/amplificador">Amplificadores</a>
                            </li>
                            <li>
                                <a href="/productos/categoria/placadeaudio">Placas de audio</a>
                            </li>
                            <li>
                                <a href="/productos/categoria/controladormidi">Controladores Midi</a>
                            </li>
                            <li>
                                <a href="/productos/categoria/todoslosproductos">Todos los productos</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="./">Signature</a></li>
                    <li><a href="./">Promociones</a></li>
                </ul>
            </div>
            <div className='navBar__usuario'>
                <li>
                    <a href="/">
                        <img src={imgLogueo} alt="imagen de logeo" />
                        <span>Loguearse</span>
                    </a>
                </li>
                <li>
                    <CartWidget />
                </li>
            </div>
        </nav>
    )
}

export default NavBar