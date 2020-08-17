import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" components={Home}/>
      </Switch>
      <h1>hello world</h1>
    </>
  );
}

export default App;
