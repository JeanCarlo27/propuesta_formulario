import './App.css';
import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PagarBd from './view/formulario_pagar/Pagar';
import Dispersar from './view/Formulario_dispersar/Dispersar';
function App() {
  const [datos, setDatos] = useState (null)
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<PagarBd  prueba ={setDatos}/>} />
          <Route path='/dispersar' exact element={<Dispersar info={datos}/>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App; 
