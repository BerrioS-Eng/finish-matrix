import Image from "next/image"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-ligth">
            <div className="container">

                <div className="navbar-brand">
                    <Image src="/matrixLogoResize.png" width={150} height={100} alt="logo"></Image>
                </div>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item">
                            <a className="nav-link text-dark active" href="#">Inicio
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Sólidos Conformados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Fluidos Solubles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Agregar Ficha</a>
                        </li>
                    </ul>

                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Ingresar</button>

                </div>
            </div>
        </nav>
    )
}

export default Navbar