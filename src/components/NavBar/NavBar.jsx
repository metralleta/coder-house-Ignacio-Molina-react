import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/">Mercadito Las Lechuzas</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/category/jewelery">electronics</Link>
                </li>
                <li>
                    <Link to="/category/electronics">jewelery</Link>
                </li>
                <li>
                    <Link to="/category/men's clothing">men's clothing</Link>
                </li>
                <li>
                    <Link to="/category/women's clothing">women's clothing</Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar
