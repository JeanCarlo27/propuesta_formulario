import './App.css';
import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav } from './view/Formulario-payout/Nav';
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Nav/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App; 
