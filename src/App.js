import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import CrearCita from './view/formulario_pagar/pagar';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<CrearCita/>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
