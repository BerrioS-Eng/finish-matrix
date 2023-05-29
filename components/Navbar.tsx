import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">

                <div className="navbar-brand">
                    <Image src="/matrixLogoResize.png" width={150} height={100} alt="logo"></Image>
                </div>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mx-auto pe-5">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold active" href="/">Inicio
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" href="/solidos">Sólidos Conformados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" href="/fluidos">Fluidos Solubles</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Agregar Ficha</a>
                        </li>
                    </ul>

                    <button className="btn btn-primary my-2 my-sm-0 ms-2" type="submit">Ingresar</button>

                </div>
            </div>
        </nav>
    )
}

export default Navbar