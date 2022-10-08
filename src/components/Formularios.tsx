
import { useForm } from '../hooks/useForm';

export const Formularios = () => {

    //usamos el customHook creado useForm
    const { formulario, onChange, email, password  } = useForm({
        email: '',
        password: ''
    });


    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value= { email } //le damos el valor por defecto
                onChange= { ( event ) => onChange( event.target.value, 'email')} 
                //podriamos ponerlo tambien desestructurando
                //onChange= { ( { target } ) => onChange( target.value, 'email')} 

            />

            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value= { password } //le damos el valor por defecto
                onChange= { ( event ) => onChange( event.target.value, 'password')} 
            />

            <code>
                <pre> { JSON.stringify( formulario, null, 2)}</pre>
            </code>

        </>
    )
}
