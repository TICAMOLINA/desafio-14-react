
const TarjetaUsuario = (props) => {

  return (
    <div className="w-[500px] h-[200px] bg-blue-400 rounded-2xl ring-2 text-center">
        <h3 className="uppercase p-7 text-[20px] text-white mb-3 mt-5">
            {props.nombre}
        </h3>
        <p className="text-gray-200 text-[20px]">{props.edad}</p>
        <p className="text-gray-200 text-[20px]">{props.profesion}</p>

    </div>
  )
}

export default TarjetaUsuario