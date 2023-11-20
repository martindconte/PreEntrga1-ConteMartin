import CartWidget from '../components/CartWidget';
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
                        <a href="/">Categorias</a>
                        <ul className='navBar__submenu'>
                            <li>
                                <a href="/category/bateria">Baterias</a>
                            </li>
                            <li>
                                <a href="/category/teclado">Teclados</a>
                            </li>
                            <li>
                                <a href="/category/amplificador">Amplificadores</a>
                            </li>
                            <li>
                                <a href="/category/placadeaudio">Placas de audio</a>
                            </li>
                            <li>
                                <a href="/category/controladormidi">Controladores Midi</a>
                            </li>
                            <li>
                                <a href="/">Todos los productos</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="/category/guitarra">Guitarras</a></li>
                    <li><a href="/category/bajo">Bajos</a></li>
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