import React from 'react';

import './App.css';
import Header from './components/header.js'
import {Switch,Route} from 'react-router-dom';
import Notes from './components/notes.js'
import Addnotes from './components/addnotes.js'
import About from './components/about.js'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Notes />
        </Route>  
        <Route path="/add" >
          <Addnotes />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
