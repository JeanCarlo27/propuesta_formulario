import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PagarBd from './view/formulario_pagar/Pagar';
import Dispersar from './view/Formulario_dispersar/Dispersar';
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<PagarBd />} />
          <Route path='/dispersar' exact element={<Dispersar />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App; 
