import React from 'react';
// import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom  from "./pages/SingleRoom"
import Error from "./pages/Error";

import { BrowserRouter as Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar"

function App() {
  return (
    <> 
    <Switch>
    <Navbar />  
        <Route exact path="/" component=
        {Home} />
        <Route exact path="/rooms/" 
        component={Rooms} />
        
   
        <Route path="/rooms/:slug" 
        component={SingleRoom} />
          {/* <Route component=  {Error} /> */}
     
    </Switch>
      
    </>
  );

} 

export default App;
