
export const Funciones = () => {

    //retorna un number, como parametro ponemos dos arugumentos de tipo number
    const sumar = (a: number, b: number): number => {
        return a + b;
    }

    return (

        <>
            <h3>Funciones</h3>
            <span> El resultado es: {sumar(7, 7)} </span>
        </>
    )
}

