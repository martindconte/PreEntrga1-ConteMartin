import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../components/CartWidget';
import logo from '../img/header-logo-menu.svg';
import imgLogueo from '../img/header-logueo.svg'


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
                                <NavLink to="/category/bateria">Baterias</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/teclado">Teclados</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/amplificador">Amplificadores</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/placadeaudio">Placas de audio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/controladormidi">Controladores Midi</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Todos los productos</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li><NavLink to="/category/guitarra">Guitarras</NavLink></li>
                    <li><NavLink to="/category/bajo">Bajos</NavLink></li>
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
        // <nav className='navBar'>
        //     <div className='navBar__logo'>
        //         <a href="/">
        //             <img src={logo} alt="logo pagina" />
        //             <h1>GCFMusic</h1>
        //         </a>
        //     </div>
        //     <div className='navBar__nav'>
        //         <ul className='navBar__menu'>
        //             <li>
        //                 <a href="/">Categorias</a>
        //                 <ul className='navBar__submenu'>
        //                     <li>
        //                         <a href="/category/bateria">Baterias</a>
        //                     </li>
        //                     <li>
        //                         <a href="/category/teclado">Teclados</a>
        //                     </li>
        //                     <li>
        //                         <a href="/category/amplificador">Amplificadores</a>
        //                     </li>
        //                     <li>
        //                         <a href="/category/placadeaudio">Placas de audio</a>
        //                     </li>
        //                     <li>
        //                         <a href="/category/controladormidi">Controladores Midi</a>
        //                     </li>
        //                     <li>
        //                         <a href="/">Todos los productos</a>
        //                     </li>
        //                 </ul>
        //             </li>
        //             <li><a href="/category/guitarra">Guitarras</a></li>
        //             <li><a href="/category/bajo">Bajos</a></li>
        //         </ul>
        //     </div>
        //     <div className='navBar__usuario'>
        //         <li>
        //             <a href="/">
        //                 <img src={imgLogueo} alt="imagen de logeo" />
        //                 <span>Loguearse</span>
        //             </a>
        //         </li>
        //         <li>
        //             <CartWidget />
        //         </li>
        //     </div>
        // </nav>
    )
}

export default NavBar