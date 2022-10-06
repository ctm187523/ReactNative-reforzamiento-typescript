import { useEffect } from 'react';
import { reqResApi } from './api/repRes';


const Usuarios = () => {

    useEffect(() => {

        //llamar al API,instalamos axios con: npm i axios, lo configuramos en reqRes.tsx de la carpeta api
        //users seria la continuacion de URL configurada en reqRes.tsx baseUrl
        //en un useEffect no podemos usar el async y el awit por tanto usamos una promesa con .then
        reqResApi.get('/users') 
            .then( resp => {
                console.log(resp.data.data);
            })
            .catch( err => console.log(err));
 
    }, [])
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

        </tbody>
      </table>
    </>
  )
}

export default Usuarios
