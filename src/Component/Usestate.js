import React from 'react'
import {useState} from 'react';

function Usestate() {
    const[count, setCount] = useState(0);
  return (
    <div>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}

export default Usestate