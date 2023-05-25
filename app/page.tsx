import { Slider } from "@/components/Slider"

export default function Home() {
  return (
    <>

      <div className="container">
        <div className="row" >
          <div className="col">

            <Slider />

          </div>
          <div className="col">

            <div className="mx-auto pt-5 ps-5">
              <div>
                <h2 className="text-center text-body-secondary">Matriz Genérica de Acabados</h2>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam tincidunt ac augue suscipit rhoncus. Donec ante erat, hendrerit sed eleifend et, dapibus at leo. Mauris bibendum mi ut dui sagittis volutpat.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
