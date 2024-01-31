import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (
        <nav>
            <h1>Apícola Las Lechuzas</h1>
            <ul>
                <li>Miel</li>
                <li>Cera</li>
                <li>Cosmética</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar
