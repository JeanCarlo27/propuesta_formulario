import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import PagarBd from './view/formulario_pagar/pagar';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<PagarBd/>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
