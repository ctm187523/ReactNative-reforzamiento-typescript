import { type } from "os"
import { useEffect, useReducer } from "react"

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

//usamos type para definir las actions
type AuthAction = { type: 'logout' }


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

        default:
            return state;
    }
}

export const Login = () => {

    //desestructuramos el state
    const [ { validando }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)
    }, []);


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

            <div className="alert alert-danger">
                No autenticado
            </div>

            <div className="alert alert-success">
                Autenticado
            </div>

            <button
                className="btn btn-primary"
            >
                Login
            </button>

            <button
                className="btn btn-danger"
            >
                Logout
            </button>

        </>


    )
}
