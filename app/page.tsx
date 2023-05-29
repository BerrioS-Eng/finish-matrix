import { Slider } from "@/components/Slider"
import Style from "./Page.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>

      <div className="container">

        <div className="row">

          <div className="col text-center">

            <div className="mx-auto pt-4">
              <h2 className="text-primary">Matriz Genérica de Acabados</h2>
              <p className="w-75 mx-auto fs-5 text-dark">
                Los materiales de construcción provienen de diversos orígenes, vistos desde la naturaleza o esencia misma de su estructura.<br />
                Comprender que la manera de abordarlos resulta muy amplia es conveniente para el entendimiento proyectual, debido a esto se construye
                un sistema de clasificación, que permite analizar el material en cuestión desde la naturaleza física de su composición hasta sus índices de sostenibilidad bioclimática.
              </p>
            </div>

          </div>

        </div>

        <Slider />

        <div className={Style.section}>

          <div className="row ">

            <div className="col mx-5 ">

              <div className="card bg-info-subtle" style={{ width: 600, height: 350 }}>
                <div className="card-body p-5">
                  <h5 className="card-title">Sólidos Conformados</h5>
                  <p className="card-text">Su constitución se da en un proceso previo a la llegada en obra y como su nombre lo indica, se presentan de manera conformada al momento de ser utilizado, esta familia se subdivide en tres ramificaciones las cuales son, sólidos rígidos, solidos semirrígidos y solidos flexibles.</p>
                  <Link href="/solidos" className="card-link text-success">Ver Categorias</Link>
                </div>
              </div>

            </div>

          </div>

        </div>
        
        <div className="row ">

          <div className="col mx-5 pb-5 ">

            <div className="card ms-auto text-end" style={{ width: 600, height: 350 }}>
              <div className="card-body p-5">
                <h5 className="card-title">Fluidos Solubles</h5>
                <p className="card-text">La conformidad del material es de diferente viscosidad al momento de llegar a la obra; varía el grado de consistencia clasificándose en fluidos de alta consistencia, fluidos de mediana consistencia, fluidos de baja consistencia.</p>
                <Link href="/fluidos" className="card-link text-success">Ver Categorias</Link>
              </div>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}
