import React from 'react'
import{useState} from 'react';

function UseStateTask() {
    const color=["red","blue","pink","black","white","yellow","orange","purple","green","brown"];
    const[count, setCount]=useState(0);
  return (
    <div>
        <h1>{color[count]}</h1>

        <button onClick={()=>{setCount(count +1)}}>Colors</button>
        <h1>{count}</h1>
    </div>
  )
}

export default UseStateTask