import { type } from "os"
import { useEffect, useReducer } from "react"
import { preProcessFile } from "typescript";
import { useCounter } from '../hooks/useCounter';

interface AuthState {
    validando: boolean,
    token: string | null
    username: string,
    nombre: string
}


const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

//usamos type para definir el payload
type LoginPayload = {
    username: string;
    nombre: string;
}


//usamos type para definir las actions, el payload usamos la interfaz LoginPayload
type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }


//creamos el reducer que devolvera un objeto de tipo de la interfaz creada arriba AuthState
//el parametro state sera de tipo AuthState y el action de tipo AuthAction definido arriba
const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }

        case 'login':
            //desestructuramos lo recibido por la action.payload
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'ABC123',
                username: username,
                nombre: nombre
            }


        default:
            return state;
    }
}

export const Login = () => {

    //desestructuramos el state
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)
    }, []);

    //metodo llamado al pulsar login
    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'PEPE',
                username: 'Er matado'
            }
        })
    }

    //metodo llamado al pulsar logout
    const logout = () => {
        dispatch({ type: 'logout' })
    }



    //usamos validando del state del useReducer
    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
            </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                (token)
                    ? <div className="alert alert-success"> Autenticado {nombre}</div>
                    : <div className="alert alert-danger"> No autenticado </div>
            }

            {
                (token)
                    ?
                    (
                        <button
                            className="btn btn-danger"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    )
                    :
                    (
                        <button
                            className="btn btn-primary"
                            onClick={login}
                        >
                            Login
                        </button>
                    )
            }
        </>
    )
}
