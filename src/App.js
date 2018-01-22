import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import ListContainer from './components/list_container';

const App = () => {
    return (
      <div className="app">
        <Header />
        <ListContainer />
      </div>
    );
}

export default App;
