import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <p>Matriz Genérica de Acabados</p>
                <small>Copyright &copy; 2023 Todo los derechos reservados</small>
            </div>
        </footer>
    )
}

export default Footer