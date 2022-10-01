

export const TiposBasicos = () => {

    //podemos hacer que la variable nombre sea de tipo string o number
    //let nombre: string | number = 'Fernando';
    //nombre = 123;

    const nombre: string = 'Pepe';
    const edad: number = 35; //si usamos const al ser una constante no seria necesario poner el tipo ya que no va a cambiar
    const estaActivo:boolean = true;

    //si no lo tipamos podriamos poner numeros en el array o usar lo de abajo
    //y que sirva para string, numeros y booleanos
    //const poderes: (string|number|boolean)[] = []
    const poderes: string[] = ['Velocidad','Volar','Respirar en el agua']


    return (
        <>
            <h3>Tipos básicos</h3>
            { nombre}, { edad }, { (estaActivo) ? 'activo' : 'no activo'}
            <br />
            {/* unimos los elementos del array con un punto y una coma */}
            { poderes.join(', ')} 
        </>
    )
}
