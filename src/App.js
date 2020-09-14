import React from 'react';
import './App.css';

import { DashBoard } from './components/DashBoard';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div className="container">
      <Header/>
      <DashBoard/>
    </div>
  );
}

export default App;
