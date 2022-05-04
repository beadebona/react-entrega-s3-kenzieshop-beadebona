import './App.css';
import Routes from './routes';
import GlobalStyle from './style/global';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Routes/>
      <ToastContainer 
      position="bottom-left"
      autoClose={3000}/>
    </div>
  );
}

export default App;
