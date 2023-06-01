import { getDataFinish } from "@/app/api/dataFinish";
import { getDataNature } from "@/app/api/dataNature";
import FinishList from "@/components/FinishList";
import Nature from "@/components/Nature";
import  styles  from "./NaturePage.module.css"


function nameGrade(id: string) {
  if (id == "1") {
    return "Sólidos Rígidos"
  } else if (id == "2") {
    return "Sólidos Semirrígidos"
  } else {
    return "Sólidos Flexibles"
  }
}

export default async function nature({ params }: any) {
  const nature = await getStaticProps(params.nature)
  const type = nature.props.data
  return (
    <>
      <div className={styles.content}>
        <div className="container mb-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item" aria-current="page">Sólidos Conformados</li>
              <li className="breadcrumb-item active fw-bolder text-black" aria-current="page">{nameGrade(params.nature)}</li>
            </ol>
          </nav>
          {
            (params.nature == "1") ? <Nature nature={type} /> : <FinishList finish={type} />
          }
        </div>
      </div>

    </>
  )
}

export async function getStaticProps(id: any) {
  const toNumber = Number(id)
  const data = (toNumber == 1) ? await getDataNature() : await getDataFinish(toNumber + 2)

  return {
    props: {
      data
    }
  };
};


