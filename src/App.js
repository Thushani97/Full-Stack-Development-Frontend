// Whatever the component that we create in our react application we import inside th APP component
import React from 'react';

import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
  return (
    <div >
      {/* Odering of the component is important. Ex: Header, Body, Footer */}
      <HeaderComponent/>
      <ListEmployeeComponent/>
      <FooterComponent/>
      
    </div>
  );
}

export default App;
