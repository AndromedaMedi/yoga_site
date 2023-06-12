import React from 'react';
import MainContainer from './containers/MainContainer';
import './App.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <div className="App">
      <MainContainer />
    </div>
  );

};

export default App;
