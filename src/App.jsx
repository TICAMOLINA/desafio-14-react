// rafce

import TarjetaUsuario from "./components/TarjetaUsuario"

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-[40px] font-bold text-center mb-6">Desafío nro. 14</h1>

      <h2 className="text-[30px] mb-4">Ejercicio A</h2>
      <TarjetaUsuario nombre="Mauricio Molina" edad="35 años" profesion="Full Stack Engineer" />

    </div>
  )
}

export default App