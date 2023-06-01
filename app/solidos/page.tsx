import Grade from "@/components/Grade"
import { getDataGrades } from '../api/dataGrades';


export default async function solidos() {
  const data = await getStaticProps()
  const grades = data.props.grades

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active fw-bolder text-black" aria-current="page">Sólidos Conformados</li>
        </ol>
      </nav>

      <Grade grades={grades} />

    </div>
  )
}

export async function getStaticProps() {

  const grades = await getDataGrades("Sólidos")

  return {
    props: {
      grades,
    },
  };
};
