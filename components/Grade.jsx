"use client"
import { useRouter } from "next/navigation"

function Grade({ grade }) {

    const router = useRouter()

    return (
        <div className="container pt-2">
            <div className="card-group">

                {grade.map((el) => (

                    <div className="card mx-2">
                        <div className="card-body text-center">
                            <h5 className="card-title">{el.grade}</h5>
                            <p className="card-text">{el.description}</p>
                            <button type="button" className="btn btn-success" onClick={() => {
                                router.push(`/solidos/${el.grade}`)
                            }}>Ver Acabado</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Grade