import { AppClima }  from "./componets/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";
import Crear from "./componets/Crear";
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";

function App() {
 

  return (
    <Router>
    <ClimaProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <Routes>
    
      <Route path='/' element={<AppClima></AppClima>}> </Route>
      </Routes>
    </ClimaProvider>
    <Routes>
    <Route path='/Crear' element={<Crear></Crear>}> </Route>
    </Routes>
    </Router>
  )
}

export default App
