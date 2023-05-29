"use client"

import Grade from "@/components/Grade"
import Image from "next/image"
import Link from "next/link"

const naturalezas = {
    "Sólidos Rígidos": [
        "Pétreos Naturales",
        "Pétreos Artificiales",
        "Maderables"
    ],
    "Sólidos Semirrígidos": [
        "Madera Aglomerada",
        "Madera Triplex",
        "Policluro de Vinilo (PVC)",
        "Poliestireno Expandido",
        "Laminas Acrilicas"
    ]
}

function rigidosDetils() {


    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page">Sólidos Conformados</li>
                    <li className="breadcrumb-item active fw-bolder text-black" aria-current="page">Sólidos Rígidos</li>
                </ol>
            </nav>
            <div className="container pt-2">
                <div className="card-group">

                    {naturalezas["Sólidos Rígidos"].map((el) => (

                        <div className="card mx-2" key={el}>
                            <div className="card-body text-center">
                                <h5 className="card-title">{el}</h5>
                                <button type="button" className="btn btn-success">
                                    <Link href="/solidos/rigidos/naturales" className="text-reset">
                                        Ver Acabado
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default rigidosDetils