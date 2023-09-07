import React from 'react'
import { useState } from 'react'
import Context from "../Hooks/Context.js"
import ComponentA from './ComponentA.js';
function ComponentB() {
    const [count,setcount]=useState(0)
    return (
        <Context.Provider value={count}>
        <div>
            <h1>Component B</h1>
            <ComponentA/>
            <button onClick={()=>{setcount(count+1)}}>count</button>
        </div>
        </Context.Provider>
    )
}

export default ComponentB