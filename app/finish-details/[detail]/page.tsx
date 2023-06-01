import { getDataFinishDetail } from "@/app/api/dataFinishDetail";

function getModalityApplication(list:any) {
    return list.map((modality:any) => (
        <tr >
            <th scope="row">{modality.keyType}</th>
            <td>{modality.value}</td>

        </tr >
    ))
}


export default async function FinishDetails({ params }: any) {
    const finish = await getStaticProps(params.detail)
    const detail = finish.props.data
    return (
        <>
            <div className="container mt-3">
                <div className="row mb-5 text-center">
                    <div className="col">
                        <p>Nombre Técnico<br/><span className="fw-bold">{detail.identityCard.technicalName}</span></p>
                    </div>
                    <div className="col">
                        <p>Nombre Común<br/><span className="fw-bold">{detail.identityCard.commonName}</span></p>
                    </div>
                    <div className="col">
                        <p>Procedencia<br/><span className="fw-bold">{detail.identityCard.sourceType}</span></p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-xl-7 ps-4">
                        <div className="row">
                            <h6>Descriptión</h6>
                            <p className="text-light">{detail.identityCard.description}</p>
                            <h6>Factores Económicos</h6>
                            <p className="text-light">{detail.identityCard.economicFactor}</p>
                            <h6>Patología</h6>
                            <p className="text-light">{detail.identityCard.patology}</p>
                        </div>
                        <div className="row">
                            <div className="col"></div>
                        </div>
                    </div>
                    <div className="col-xl-5 text-center align-self-center m-auto">
                        <img src="/acabado1.jpg" width={300} height={300} />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <div className="row">
                            <h6>Caractersiticas visuales</h6>
                            <table className="table">

                                <tbody>
                                    <tr>
                                        <th scope="row">Dimension</th>
                                        <td>{detail.identityCard.dimension}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Color</th>
                                        <td>{detail.identityCard.color}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Textura</th>
                                        <td>{detail.identityCard.texture}</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            
                        </div>
                    </div>
                    <div className="col">
                        <h6>Modalidad Constructiva</h6>
                            <table className="table">
                                <tbody>
                                    {
                                        getModalityApplication(detail.identityCard.modalityApplicationList)
                                    }
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps(id: any) {
    const data = await getDataFinishDetail(Number(id))
    return {
        props: {
            data
        }
    };
};


