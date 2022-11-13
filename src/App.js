import React from 'react';
import { Route, Routes } from "react-router-dom";

import PageNotFound from './PageNotFound';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/'  element = {<Home/>}></Route>
        <Route path='/starred'  element = {<Starred/>}></Route>
        <Route path='*'  element = {<PageNotFound/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
