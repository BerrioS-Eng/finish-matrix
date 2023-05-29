import Grade from "@/components/Grade"

const arrayFluid = {
  "Fluidos Solubles": [
    {
      "grade": "Alta Consistencia",
      "description": "Los fluidos de alta consistencia, también conocidos como revestimientos de piel gruesa, son mezclas solubles y espesas de naturaleza cementosa. En estos casos, el cemento Portland actúa como aglutinante que une agregados áridos de diferentes orígenes y granulometrías. Por ejemplo, los repellos, revoques, pañetes, solados y pavimentos, entre otros."
    },
    {
      "grade": "Mediana Consistencia",
      "description": "Los fluidos de mediana consistencia son mezclas solubles, de viscosidad intermedia; permiten obtener revestimientos de grosor intermedio con variados colores y texturas. Además de ser decorativos, también actúan como protectores, preservantes o acondicionadores, actuando de tapa poros, impermeabilizantes, correctores térmicos, entre otros y funciona como receptor del acabado final o bien serlo."
    },
    {
      "grade": "Baja Consistencia",
      "description": "Los fluidos de baja consistencia y de piel delgada, son mezclas solubles de baja viscosidad que se componen de aglomerante, pigmento y aditivos, se aplican sobre un soporte resistente. Al secarse y endurecerse, forman una película delgada y rígida de piel tersa."
    }
  ]
}

const fluidos = () => {
  return (
    <div className="container">
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active  fw-bolder text-black" aria-current="page">Fluidos Solubles</li>
        </ol>
        </nav>
        <Grade grade={arrayFluid["Fluidos Solubles"]}/>
    </div>
  )
}

export default fluidos