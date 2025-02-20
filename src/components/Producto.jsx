
const Producto = (props) => {

    return (
        <section className="p-7 flex justify-center" >
            <article className="my-auto border-2 border-black w-[25rem]">
                <div className="text-center">
                    <h3 className="text-[30px] font-bold my-6">{props.nombreProducto}
                    </h3>
                    <p className="mx-6">{props.descripción}</p>
                </div>
                <div className="p-4 flex justify-center">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-4 cursor-pointer rounded-2xl">
                    Mostrar más...</button>
                </div>
            </article>
        </section>
    )
}

export default Producto