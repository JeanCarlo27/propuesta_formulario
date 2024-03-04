import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav } from './view/Formulario-payout/Nav';
import { FormularioPayout } from './view/Formulario-payout/FormularioPayout';
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<FormularioPayout/>}/>
          <Route path='/menu' element={<Nav/>}/>  
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App; 
