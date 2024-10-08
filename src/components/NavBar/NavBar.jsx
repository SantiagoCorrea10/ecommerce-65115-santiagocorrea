import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Tienda de Juegos</h3>
            <div>
                <button>Survival Horror</button>
                <button>Shotters</button>
                <button>Plataformeros</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar