import { Slider } from "@/components/slider/Slider"
import styles from "./Page.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>

      <div className="">

        <div className="">

          <div className={styles.section1}>
            <section className={styles.home}>
              <h3 className="">Matriz<br/>Genérica de<br/>Acabados</h3>
              <p className="">
                Los materiales de construcción provienen de diversos orígenes, vistos desde la naturaleza o esencia misma de su estructura.
              </p>
            </section>
            <div className="imageHome"> /*Estamos trabajando en el home, posicionar la image*/
              <Image src="/matrixHome.jpg" alt="matrixHome"></Image>
            </div>
          </div>

        </div>

        <Slider />

        <div >

          <div className="">
            <div className="">
              <h2 className="">Herramienta para determinar y seleccionar acabados en fachadas arquitectónicas</h2>
              <p className="">Se muestra a partir de fichas de identidad, desglosando información de los materiales como el aspecto físico y compositivo, también, el comportamiento frente a diferentes criterios de sostenibilidad bioclimática.<br/>Estableciendo en primera instancia dos grandes grupos: sólidos y fluidos; luego subdividirlos por su naturaleza misma. </p>
            </div>
            <div className="">
              <div className="">
                <div className="">
                  <Link href="/solidos" className="">
                    <div className="">
                      <div className="icon">
                        <div className="">
                          <i className="fa fa-duotone fa-shop fa-4x"></i>
                        </div>
                        Sólidos
                      </div>
                    </div>
                  </Link>
                  
                </div>
                <div className="">
                 
                  <Link href="/fluidos" className="w-50 pl-3 text-decoration-none">
                    <div className="">
                      <div className="icon">
                        <div className="">
                          <i className="fa fa-duotone fa-water fa-4x"></i>
                        </div>
                        Fluidos
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
