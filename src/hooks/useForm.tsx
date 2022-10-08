import { useState } from "react";

//para este custom hook hacemos que sea de tipo generico <T extends Object>
// y que este herede de un Object
export const useForm = <T extends Object>( formulario: T) => {
    
    const [state, setState] = useState( formulario ); //usamos el formulario recibido como initialState

    //el campo hacemos que sea del tipo del generico de lo que recibe por parametro el hook
    //usamos keyof T
    const onChange = ( value: string, campo: keyof T) => {
        setState({
            ...state,
            [campo]: value
        }); 
    }

    return {
        ...state, //desestructuramos todas las propiedades del state
        onChange,
        formulario: state
    }

}
