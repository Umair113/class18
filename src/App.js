import React from 'react';
import logo from './logo.svg';
import './App.css';
import { initNotification } from "./services/firebaseService"

function App() {
  return (
    <div className="App">
      Hello
      <button onClick={initNotification}>Configure Notifications</button>
    </div>
  );
}

export default App;
