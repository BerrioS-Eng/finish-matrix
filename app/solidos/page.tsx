import Grade from "@/components/Grade"

const arraySolid = {
  "Sólidos Conformados": [
    {
      "grade": "Sólidos Rígidos",
      "description": "Los sólidos rígidos, también conocidos como revestimientos pesados, son materiales de construcción que poseen rigidez inherente. " +
        "Estos elementos pueden ser prefabricados o producidos in situ, y se caracterizan por tener una forma, volumen y dimensiones definidas, sin necesidad " +
        "de aplicarse en el lugar de obra para mostrar su rigidez completa. Provienen de la transformación de materiales pétreos naturales y artificiales, y maderas."
    },
    {
      "grade": "Sólidos Semirrígidos",
      "description": "Los sólidos semirrígidos, también conocidos como revestimientos semipesados, " +
        "son elementos de construcción que poseen una rigidez intermedia " +
        "y cuya estabilidad depende de factores externos, es decir, no son inherentemente firmes. " +
        "Este grupo incluye productos que, debido a su forma y composición material, " +
        "poseen cierta flexibilidad, lo que significa que necesitan de una estructura de soporte resistente o una obra negra con adhesión para lograr su rigidez total.",
    },
    {
      "grade": "Sólidos Flexibles",
      "description": "Los sólidos flexibles, también conocidos como revestimientos ligeros, son productos diseñados para recubrir superficies y también funcionar como aislantes, que se caracterizan por ser delgados sin gran capacidad de sostenerse por sí mismo, presentados en forma de mantas, laminas o rollos. Estos elementos se instalan en la obra utilizando pegamentos o adhesivos."
    }
  ]
}

const solidos = () => {
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active fw-bolder text-black" aria-current="page">Sólidos Conformados</li>
        </ol>
      </nav>
      <Grade grade={arraySolid["Sólidos Conformados"]} />
    </div>
  )
}

export default solidos