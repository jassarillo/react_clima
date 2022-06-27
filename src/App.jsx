import { AppClima }  from "./componets/AppClima";
import { AppMercado }  from "./componets/AppMercado";
import { ClimaProvider } from "./context/ClimaProvider";
import { MercadoProvider } from "./context/MercadoProvider"
import Crear from "./componets/Crear";
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";

function App() {
 

  return (
    <Router>
      <header>
        <h1>Buscador...</h1>
      </header> 


    <ClimaProvider>
      <Routes>
      <Route path='/' element={<AppClima></AppClima>}> </Route>
      </Routes>
    </ClimaProvider>


    <MercadoProvider>
      <Routes>
      <Route path='/b' element={<AppMercado></AppMercado>}> </Route>
      </Routes>
    </MercadoProvider>




    <Routes>
    <Route path='/Crear' element={<Crear></Crear>}> </Route>
    </Routes>
    </Router>
  )
}

export default App
