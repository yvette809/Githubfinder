import React from 'react';

import './App.css';
import UserItem from './components/users/UserItem'
import NavBar from './layout/NavBar';
//import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserItem/>
    </div>
  );
}

export default App;
