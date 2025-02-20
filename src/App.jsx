// rafce

import LikeButton from "./components/LikeButton"
import Producto from "./components/Producto"
import TarjetaUsuario from "./components/TarjetaUsuario"

const App = () => {

  
  return (
    <div className="container mx-auto">
      <h1 className="text-[40px] font-bold text-center mb-6">Desafío nro. 14</h1>

      <h2 className="text-[30px] mb-4">Ejercicio A</h2>
      <TarjetaUsuario nombre="Mauricio Molina" edad="35 años" profesion="Full Stack Engineer" />

        <hr />

      <h2 className="text-[30px] mb-4">Ejercicio B</h2>
      <LikeButton />

        <hr />

      <h2 className="text-[30px] mb-4">Ejercicio C</h2>

      <Producto nombreProducto="Campera selección Argentina reversible" descripción="Ya sea que estés mostrando tu lealtad frente al juego o saliendo a la ciudad, esta Campera Argentina adidas Anthem Hombre reversible te permite lucir con orgullo los colores de tu país. Con un lado asintiendo con la cabeza a la equipación de local de Argentina y el otro reflejando su uniforme de visitante, te dará opciones cuando quieras expresar tu afición al fútbol. El tejido antidesgarro duradero garantiza que te mantengas cómodo sea cual sea el look que elijas. Este producto está fabricado con materiales 100% reciclados."/>
      
    </div>
  )
}

export default App