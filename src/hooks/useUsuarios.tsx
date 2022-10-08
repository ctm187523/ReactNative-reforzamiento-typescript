
import { useEffect, useRef, useState } from 'react';
import { ReqResListado, Usuario } from '../interfaces/repRes';
import { reqResApi } from '../components/api/repRes';


//creamos un customHook para manejar la logica en el archivo Usuarios.tsx
export const useUsuarios = () => {

    //usamos el useState para que se encargue de recibir la informacion de los usuarios pedidos con axios
    //importamos de interfaces/repRes las interfaces para el tipado de los datos recibidos usamos la interfaz Usuario
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    //usamos useRef como una referencia a una varaible pero si cambia su valor sigue siendo la misma pero
    // no vuelve a renderizar el componente, lo usamos para la paginacion cambiar de pagina de lista de usuarios
    //por defecto ponemos la pagina 1 que seria la primera pagina del listado de usuarios
    const paginaRef = useRef(1)

    //usamos el useEffect para que al cargar la pagina por primera vez se cargue la lista de usuarios
    //en la pagina 1 ya que el useRef creado arriba por defecto es 1
    useEffect(() => {

        cargarUsuarios();

    }, []);


    const cargarUsuarios = async () => {

        //llamar al API,instalamos axios con: npm i axios, lo configuramos en reqRes.tsx de la carpeta api
        //users seria la continuacion de URL configurada en reqRes.tsx baseUrl

        //importamos de interfaces/repRes las interfaces para el tipado de los datos recibidos
        //el segundo parametro del get es para pedirle en la peticion la pagina que queremos ver del listado de usuarios
        //le pedimos los params ver video 26 minuto 3:50 con el numero de la pagina, donde usaremos el paremetro creado arriba 
        //useRef(paginaRef) que por defecto es uno 
        //los params forma parte del cuerpo de la peticion como el body, headers, etc ver en postman estos parametros
        //en params tendriamos page, per_page, es lo que saldria detras del simbolo ? en la url
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        //comprobamos si hay informacion y incrementamos el useRef para que al ser pulsado el boton
        //pase a la siguiente pagina
        if (resp.data.data.length > 0) {
            //establecemos el array de los usuarios recibidos en el useState creado arriba
            setUsuarios(resp.data.data);
        } else {
            //si no hay mas registros decrementamos para quedarnos en esa pagina que seria la ultima
            paginaRef.current--;
            alert('No hay mas registros')
        }

    }

    const paginaSiguiente = () => {
        paginaRef.current++; //augmentamos la variable paginaRef
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        //comprobamos que sea la pagina mayor que uno
        if (paginaRef.current > 1) {
            paginaRef.current--; //disminuimos la variable paginaRef
            cargarUsuarios();
        }

    }

    return {

        usuarios,
        paginaSiguiente,
        paginaAnterior

    }

}