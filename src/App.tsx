import { Contador } from "./components/Contador"
import { ContadorConHook } from "./components/ContadorConHook"
import { Login } from "./components/Login"
import Usuarios from "./components/Usuarios"
import { Funciones } from "./typescript/Funciones"
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales"
//import { TiposBasicos } from "./typescript/TiposBasicos"

 const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion TS-React</h1>
      <hr/>
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      {/* <Login /> */}
      <Usuarios />
    </div>
  )
}

export default App;
