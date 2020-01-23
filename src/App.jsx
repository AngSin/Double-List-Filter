import React from 'react';
import './App.css';

import Header from './components/Header';
import ListContainer from './components/ListWrapper';

const App = () => (
  <div className="app">
    <Header />
    <ListContainer />
  </div>
);

export default App;
