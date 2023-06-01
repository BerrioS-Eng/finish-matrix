import { getDataFinish } from "@/app/api/dataFinish";
import FinishList from "@/components/FinishList";
import styles from "../NaturePage.module.css"

function nameNature(id: string) {
    if (id == "1") {
        return "Pétreos Naturales"
    } else if (id == "2") {
        return "Pétreos Artificiales"
    } else {
        return "Maderas"
    }
}

export default async function finish({ params }: any) {
    const finish = await getStaticProps(params.finish)
    const types = finish.props.data
    return (
        <>
            <div className={styles.content}>
                <div className="container mb-5">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" aria-current="page">Sólidos Conformados</li>
                        <li className="breadcrumb-item" aria-current="page">Sólidos Rígidos</li>
                        <li className="breadcrumb-item active fw-bolder text-black" aria-current="page">{nameNature(params.finish)}</li>
                    </ol>
                    <FinishList finish={types} />
                </div>
            </div>
        </>
    )
}

export async function getStaticProps(id: string) {
    const data = await getDataFinish(Number(id))
    return {
        props: {
            data
        }
    };
};
