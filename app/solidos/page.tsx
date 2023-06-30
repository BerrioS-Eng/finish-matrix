import styles from "./SolidPage.module.css"

async function getSolidGrades(){
  const solidGrades = await fetch(
    `http://localhost:8080/api/grade/find-all-by-namegrade/solidos`
  )

  if(!solidGrades.ok){
    throw new Error('Failed to fetch data')
  }

  return solidGrades.json()
}

export default async function Solidos(){
  //const res = await getSolidGrades()
  //Organizar los recursos
  //Preparar los estilos de la página
  //Desarrollar el componente para listar los elementos
  return (
    <div>
      <img src="" alt="bgSolid" className={styles.bg}/>
      <div>
        
      </div>
    </div>
  )
}