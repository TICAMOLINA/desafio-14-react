import { useState } from "react"

const Contador = ({ valorInicial, valorMaximo }) => {

    const [contador, setContador] = useState(valorInicial)

    const incrementar = () => {
        setContador(contador + 1)
    }


  return (
    <div className="mb-10 mt-5">
        <h2 className="text-5xl bg-red-800 p-8 text-white">Contador</h2>
        <hr />

        <h3 className="text-3xl bg-red-500 p-4 text-white mb-4">Valor: {contador}</h3>
    
        <button 
        className={`mr-2 font-bold py-2 px-4 rounded ${
          contador >= valorMaximo ? "bg-gray-400 cursor-not-allowed": "bg-red-500 hover:bg-red-700 text-white cursor-pointer"}`}
        disabled={contador >= valorMaximo}
        onClick={incrementar}>Incrementar        
        </button>
    </div>
  )
}

export default Contador