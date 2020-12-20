import React, { Component } from 'react';
import Routes from './routes';

import './styles.css';
import Header from './components/Header';
import Main from './pages/main';


const App = () => (
  <div className='App'>
  {/* Todo nosso layout de componente, no caso header
    pages, no caso main, serão jogados aqui dentro */}
    <Header/> 
    <Routes />
  </div>
  
);


export default App;
