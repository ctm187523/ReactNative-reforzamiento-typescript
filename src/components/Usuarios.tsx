
import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/repRes';



const Usuarios = () => {

  //usamos el customHook hooks/useUsuarios
  const { usuarios, paginaSiguiente, paginaAnterior} = useUsuarios();
  
  //creamos un metodo,desestructuramos el objeto usuario
  const renderItem = ({ id, first_name, last_name, email, avatar }: Usuario) => {

    return (
      // el key deberia de ser un String
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 35,
              borderRadius: 100
            }} />
        </td>
        <td> {first_name} {last_name}</td>
        <td> {email}  </td>
      </tr>
    )
  }


  return (
    <>
      <h3>Usuarios: </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            //usamos la funcion renderItem creada arriba para que renderize los usuarios
            usuarios.map(usuario => renderItem(usuario))
          }
        </tbody>
      </table>

       {/* boton para hacer una paginacion al pulsar el boton carga una nueva pagina hacia atras con nuevos usuarios */}
       <button
        className="btn btn-primary"
        onClick={ paginaAnterior }
        style = {{ marginRight: 10 }}
      >
        Anteriores
      </button>


      {/* boton para hacer una paginacion al pulsar el boton carga una nueva pagina hacia adelante con nuevos usuarios */}
      <button
        className="btn btn-primary"
        onClick={ paginaSiguiente }
      >
        Siguientes
      </button>
    </>
  )
}

export default Usuarios
