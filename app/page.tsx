import styles from "./Page.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="">
        <div className={styles.section1}>
          <section className={styles.home}>
            <h3 className={styles.p1}>Matriz<br />Genérica de<br />Acabados</h3>
            <p className={styles.paragraph}>
              Los materiales de construcción provienen de diversos orígenes,
              vistos desde la naturaleza o esencia misma de su estructura.
            </p>
            <p className={styles.paragraph}>
              Comprender que la manera de abordarlos resulta muy amplia es conveniente para el entendimiento
              proyectual, debido a esto se construye un sistema de clasificación, que permite analizar el
              material en cuestión desde la naturaleza física de su composición hasta sus índices de
              sostenibilidad bioclimática.
            </p>
          </section>
          <div >
            <Image className={styles.imageHome} src="/matrixdeg.png" alt="matrixHome" width={848} height={548}></Image>
          </div>
        </div>
        <section className={styles.section2}>
          <div>
            <h3>Sistema de clasificación y categorización de acabados arquitectonicos</h3>
            <p className={styles.paragraph}>
              Se muestra a partir de fichas de identidad, desglosando información de los materiales como el aspecto
              físico y compositivo, también, el comportamiento frente a diferentes criterios de sostenibilidad
              bioclimática.
              <br />
              Se establece en primera instancia dos grupos: sólidos y fluidos; luego se subdividen por
              su naturaleza, de esta manera se obtiene un estudio amplio y adecuado en los aspectos claves
              para la escogencia de los materiales, consiguiendo un sistema aplicable a lo largo del tiempo.
            </p>
          </div>
        </section>
        <section className={styles.section3}>
          <Link href="">
            <div className={styles.iconSolid}>
              <div>
                <i className="fa fa-duotone fa-shop fa-4x"></i>
              </div>
              Sólidos
            </div>
          </Link>
          <Link href="">
            <div className={styles.iconFluid}>
              <div>
                <i className="fa fa-duotone fa-water fa-4x"></i>
              </div>
              Fluidos
            </div>
          </Link>
        </section>

      </div>
    </>
  )
}
