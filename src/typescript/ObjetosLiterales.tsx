

//diferencias entre type, class y interface las 3 son para crear los tipos de los objetos
//interface y type es parecido solo que interface se puede extender(heredar) para javascript no cuenta no ocupa memoria
//la clase puede crear instancias y si tiene representacion en javascript ocupa memoria en la convesion a javascript
interface Persona{

    nombreCompleto: string;
    edad: number;
    direccion: Direccion //la direccion al ser otro objeto la definimos con otra interfaz abajo
}

interface Direccion {
    pais: string;
    casaNo: number;
}
export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Pepe',
        edad: 35,
        direccion: {
            pais: 'Canada',
            casaNo: 615
        }
    }

    return (
        <div>
            <h3>Objetos Literales</h3>
            {/* los objetos no se puden mostar directamente 
            usamos  JSON.stringify para que sea un JSON*/}
            <pre>
                 { JSON.stringify( persona, null ,2 )}
            </pre>
            {/* { JSON.stringify( persona )} */}

        </div>
    )
}
