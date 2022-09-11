import React from 'react';


import Header from './Components/Header';

import { Routes ,Route } from 'react-router-dom';
import {HomePage} from './Pages/HomePage'
import {SubmitPage} from './Pages/SubmitPage'



function App() {

 
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/submit" element={<SubmitPage/>}/>
        </Routes>
    

    </div>
  );
}

export default App;
