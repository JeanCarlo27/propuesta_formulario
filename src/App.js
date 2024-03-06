import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormularioPayout } from './view/Formulario-payout/FormularioPayout';
import { ContecFormulario } from './view/Formulario-payout/view/ContecFormulario';
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<FormularioPayout/>}/>
          <Route path='/Contenido' element={<ContecFormulario/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App; 
