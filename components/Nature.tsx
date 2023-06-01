import Image from "next/image"
import Link from "next/link"

type Naturaleza = {
    idNature: number,
    nameNature: string
}

function filterNature(element: Naturaleza) {
    if (element.idNature < 4) {
        return <>
            <div className="card mx-4 rounded">
                <Image className="mx-auto pt-4" src={`/acabado${element.idNature}.jpg`} width={250} height={250} alt="Naturaleza" />
                <h5 className="card-title mt-3 mb-3 text-center">{element.nameNature}</h5>
                <Link href={`/solidos/1/${element.idNature}`} className="stretched-link" />
            </div>
        </>

    }
}

function Nature({ nature }: any) {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="card-group">
                        {
                            nature.map((element: Naturaleza) => (
                                filterNature(element)
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nature