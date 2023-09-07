// import Navbar from "./Component/Navbar"
// import Left from "./Component/Left";
// import Right from "./Component/Right";
// import Footer from "./Boostrap_Component/";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Dashboard from "./Component/Dashboard";
// import {useState} from 'react';
import Usestate from "./Component/Usestate";
import UseStateTask from "./Component/UseStateTask";
import Count from "./Component/Count";
import ArrayObject from "./Component/ArrayObject";
import ArrayIteration from "./Component/ArrayIteration";
import ComponentB from '../src/Component/Hooks/ComponentB';

import ClassComponent from "./Component/classComponent";



function App(){


return(
<div>
    <Dashboard/>

<Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="ArrayIteration" element={<ArrayIteration/>}/>
    <Route path="Usestate" element={<Usestate/>}/>
    <Route path="UseStateTask" element={<UseStateTask/>}/>
    <Route path="Count" element={<Count/>}/>
    <Route path="ArrayObject" element={<ArrayObject/>}/>
    <Route path="ComponentB" element={<ComponentB/>}/>
    <Route path="ClassComponent" element={<ClassComponent/>}/>
    
</Routes>
</div>

    
)
}
export default App

