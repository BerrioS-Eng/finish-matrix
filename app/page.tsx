import { Slider } from "@/components/slider/Slider"
import Style from "./Page.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>

      <div className="">

        <div className="">

          <div className="">

            <div className="">
              <h3 className="">Matriz Genérica de Acabados</h3>
              <p className="">
                Los materiales de construcción provienen de diversos orígenes, vistos desde la naturaleza o esencia misma de su estructura.<br />
                Comprender que la manera de abordarlos resulta muy amplia es conveniente para el entendimiento proyectual, debido a esto se construye
                un sistema de clasificación, que permite analizar el material en cuestión desde la naturaleza física de su composición hasta sus índices de sostenibilidad bioclimática.
              </p>
            </div>

          </div>

        </div>

        <Slider />

        <div >

          <div className="row align-items-center">
            <div className="col-lg-7 py-5 ps-4">
              <h2 className="mb-4 text-primary">Herramienta para determinar y seleccionar acabados en fachadas arquitectónicas</h2>
              <p className="m-0 fs-6 text-white">Se muestra a partir de fichas de identidad, desglosando información de los materiales como el aspecto físico y compositivo, también, el comportamiento frente a diferentes criterios de sostenibilidad bioclimática.<br/>Estableciendo en primera instancia dos grandes grupos: sólidos y fluidos; luego subdividirlos por su naturaleza misma. </p>
            </div>
            <div className="col-lg-5">
              <div className="py-5 px-4 masthead-cards">
                <div className="d-flex">
                  <Link href="/solidos" className="w-50 pr-3 pb-4 text-decoration-none">
                    <div className="card border-0 border-bottom-red shadow-lg shadow-hover">
                      <div className="card-body text-center ">
                        <div className="text-center">
                          <i className="fa fa-duotone fa-shop fa-4x my-2"></i>
                        </div>
                        Sólidos
                      </div>
                    </div>
                  </Link>
                  
                </div>
                <div className="d-flex flex-row-reverse">
                 
                  <Link href="/fluidos" className="w-50 pl-3 text-decoration-none">
                    <div className="card border-0 border-bottom-green shadow-lg shadow-hover">
                      <div className="card-body text-center">
                        <div className="text-center">
                          <i className="fa fa-duotone fa-water fa-4x my-2"></i>
                        </div>
                        Fluidos
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="shape"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
