"use client"
import Image from "next/image"
import Link from "next/link"

function Grade({ grades }) {

    return (
        <>
            <div className="container pt-2">

                {grades.map((grade) => (
                    
                    <div className="row">
                        <div className="card mx-auto mb-4 w-75">
                            <div className="row g-0 justify-content-center align-items-center">
                                <div className="col-md-8">
                                    <div className="card-body pt-4 ps-4 pb-4" key={grade.idGrade}>
                                        <h5 className="card-title">{grade.nameGrade}</h5>
                                        <p className="card-text fs-6">{grade.descriptionGrade}</p>
                                    </div>
                                </div>
                                <div className="col-md-4 justify-content-center">
                                    <Image src={`/solido${grade.idGrade}.jpg`} width={260} height={260} alt={grade.nameGrade}/>
                                    <Link href={`/${grade.nameGrade.includes("Sólidos") ? "solidos" : "fluidos"}/${grade.idGrade}`} className="stretched-link" />
                                </div>
                            </div>
                        </div>
                    </div>

                ))}


            </div>
        </>
    )
}

export default Grade