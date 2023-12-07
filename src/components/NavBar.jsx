import { Link, NavLink } from 'react-router-dom';
import logo from '../img/header-logo-menu.svg';
import imgLogueo from '../img/header-logueo.svg'
import CartWidget from '../components/CartWidget';

function NavBar() {
    return (
        <nav className='navBar'>
            <div className='navBar__logo'>
                <Link to="/">
                    <img src={logo} alt="logo pagina" />
                    <h1>GCFMusic</h1>
                </Link>
            </div>
            <div className='navBar__nav'>
                <ul className='navBar__menu'>
                    <li>
                        <NavLink to="/">Categorias</NavLink>
                        <ul className='navBar__submenu'>
                            <li>
                                <NavLink to={"/category/bateria"} className={ ( { isActive } ) => isActive ? 'activeLink' : '' } >Baterias</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/teclado" className={ ( { isActive } ) => isActive ? 'activeLink' : '' }>Teclados</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/amplificador" className={ ( { isActive } ) => isActive ? 'activeLink' : '' }>Amplificadores</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/placadeaudio" className={ ( { isActive } ) => isActive ? 'activeLink' : '' }>Placas de audio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/controladormidi" className={ ( { isActive } ) => isActive ? 'activeLink' : '' }>Controladores Midi</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Todos los productos</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li><NavLink to="/category/guitarra" className={ ( { isActive } ) => isActive ? 'activeLink' : '' }>Guitarras</NavLink></li>
                    <li><NavLink to="/category/bajo" className={ ( { isActive } ) => isActive ? 'activeLink' : '' }>Bajos</NavLink></li>
                </ul>
            </div>
            <div className='navBar__usuario'>
                <li>
                    <NavLink to="/">
                        <img src={imgLogueo} alt="imagen de logeo" />
                        <span>Loguearse</span>
                    </NavLink>
                </li>
                <li>
                    <CartWidget />
                </li>
            </div>
        </nav>
    )
}

export default NavBar