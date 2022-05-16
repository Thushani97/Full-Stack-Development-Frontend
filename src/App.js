// Whatever the component that we create in our react application we import inside th APP component
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
  return (
    <div >
      <Router>
        <HeaderComponent/>
        <div className='container'>
            <Routes>
              <Route exact path="/" element={<ListEmployeeComponent/>}> </Route>
              <Route path="/employees" element={<ListEmployeeComponent/>}> </Route>
              <Route path="/add-employee" element={<AddEmployeeComponent/>}> </Route>
            </Routes>
        </div>
        <FooterComponent/>
      </Router>
      {/* Odering of the component is important. Ex: Header, Body, Footer */}

    </div>
  );
}

export default App;
