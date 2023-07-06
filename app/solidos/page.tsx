import ListItems from "@/components/list/ListItems"
import { getDataGrades } from "../api/dataGrades"
import Image from "next/image"
import styles from "@/components/solidFluidStyle/SolidFluid.module.css"

export default async function Solidos(){
  const res = await getDataGrades("solidos")
  return (
    <>
      <div className={styles.content}>
        <div className={styles.section1}>
          <div className={styles.infoPage}>
            <h3>Sólidos<br/>Conformados</h3>
            <p>
              Su constitución se da en un proceso previo a la llegada en obra y como su nombre lo indica, 
              se presentan de manera conformada al momento de ser utilizado, esta familia se subdivide en 
              tres ramificaciones las cuales son, sólidos rígidos, solidos semirrígidos y solidos flexibles.
              <br/>
              </p>
          </div>
        </div>
        <ListItems elements={res} />
      </div>
      <Image src={"/solidWall.png"} alt={"bgSolid"} fill={true} className={styles.bg}/>
    </>
  )
}