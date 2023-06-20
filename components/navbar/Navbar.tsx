import Image from "next/image"
import Link from "next/link"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src="/matrixLogo.png" width={40} height={40} alt="logo"></Image>
                </div>

                <div className={styles.link}>
                    <Link className={styles.item} href="/">Inicio</Link>

                    <Link className={styles.item} href="/solidos">Sólidos Conformados</Link>

                    <Link className={styles.item} href="/fluidos">Fluidos Solubles</Link>
                </div>

                <div >
                    <button className={styles.login} type="submit">Ingresar</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar