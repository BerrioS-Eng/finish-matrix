import Image from "next/image"

const identityCard = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item" aria-current="page">Sólidos Conformados</li>
              <li className="breadcrumb-item" aria-current="page">Sólidos Rígidos</li>
              <li className="breadcrumb-item" aria-current="page">Pétreos Naturales</li>
              <li className="breadcrumb-item active fw-bolder text-black" aria-current="page">Piedra Sin Proceso</li>
            </ol>
          </nav>
          <div className="col">
          <Image src="/petreonatural.JPG" alt="petreoNaturalTable" width={850} height={500} className="mb-5" />
        </div>
        </div>
      </div>
    </>
  )
}

export default identityCard