import Link from "next/link"
import styles from "./FinishList.module.css"

export default function FinishList({ finish }: any) {
    return (
        <div className={styles.content}>
            <div className="container d-flex justify-content-center">

                <ul className="list-group mt-5 text-white w-75">
                    {
                        finish.map((element: any) => (

                            <li className="list-group-item d-flex justify-content-between my-3" >

                                <div className="d-flex flex-row">

                                    <div className="ml-5 p-2">
                                        <div className="d-flex">
                                            <h6 className="mb-0"> <span className="text-secondary">Nombre Técnico: </span>{element.identityCard.technicalName}</h6>  <span className="ps-5 fw-bold"><span className="text-secondary">Nombre Común: </span>{element.identityCard.commonName}</span>
                                        </div>
                                        <div className="mt-2">
                                            <span>Procedencia: {element.identityCard.sourceType}</span>
                                        </div>
                                    </div>
                                </div>
                                <Link href={`/finish-details/${element.identityCard.idIdentityCard}`} className="stretched-link" />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

