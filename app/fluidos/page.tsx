import Grade from "@/components/Grade"
import { getDataGrades } from "../api/dataGrades";

export default async function fluidos() {
  const data = await getStaticProps()
  const grades = data.props.grades
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active  fw-bolder text-black" aria-current="page">Fluidos Solubles</li>
        </ol>
      </nav>
      <Grade grades={grades} />
    </div>
  )
}

export async function getStaticProps() {

  const grades = await getDataGrades("Consistencia")

  return {
    props: {
      grades,
    },
  };
};

