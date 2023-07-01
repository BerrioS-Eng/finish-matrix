import ListItems from "@/components/list/ListItems"
import { getDataGrades } from "../api/dataGrades"
import Image from "next/image"
import styles from "@/components/solidFluidStyle/SolidFluid.module.css"

export default async function Fluidos() {
  const res = await getDataGrades("consistencia")
  return (
    <>
      <div className={styles.content}>
        <div className={styles.section1}>
          <div className={styles.infoPage}>
            <h3>Fluidos<br/>Solubles</h3>
            <p>
            En la familia de los líquidos solubles ocurre lo contrario, la conformidad del material 
            es de diferente viscosidad al momento de llegar a la obra; varía el grado de consistencia 
            clasificándose en fluidos de alta consistencia, fluidos de mediana consistencia, fluidos 
            de baja consistencia</p>
          </div>
        </div>
        <ListItems elements={res} />
      </div>
      <Image src={"/solidWall.png"} alt={"bgSolid"} fill={true} className={styles.bg}/>
    </>
  )
}


