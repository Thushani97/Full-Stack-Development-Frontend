// Whatever the component that we create in our react application we import inside th APP component
import React from 'react';

import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponent';

function App() {
  return (
    <div >
      <ListEmployeeComponent/>
    </div>
  );
}

export default App;
