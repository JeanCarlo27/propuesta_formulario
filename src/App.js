import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import PagarBd from './view/formulario_pagar/pagar';
import Dispersar from './view/Formulario_dispersar/dispersar';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<PagarBd/>} />
          <Route path='/dispersar' exact element={<Dispersar/>}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
