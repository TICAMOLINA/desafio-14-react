import { useState } from "react"

const Producto = (props) => {

    const [showDescription, setShowDescription] = useState(false)

    const reaction = () => {
        setShowDescription(!showDescription)
    }


    return (
        <section className="p-7 flex justify-center" >
            <article className="bg-fuchsia-400 my-auto border-2 border-black w-[25rem]">
                <div className="text-center">
                    <h3 className="text-[30px] font-bold my-6">{props.nombreProducto}
                    </h3>
                    {
                        showDescription ? (                           
                            <p className="mx-6">{props.descripcion}</p>
                        ) : (
                            <p>...</p>                            
                        )
                    }
                </div>

                <div className="p-4 flex justify-center">
                    <button 
                        onClick={reaction} 
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-4 cursor-pointer rounded-2xl">
                        {showDescription ? "Mostrar menos..." : "Mostrar más..."}
                    </button>
                </div>

            </article>
        </section>
    )
}

export default Producto