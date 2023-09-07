import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Count() {
  const[count, setCount]=useState(0)
  const[name, setName]=useState()
  useEffect(
    ()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(
        (response)=>{
          console.log(response.data)
          setName(response.data[count].name)
        }
      )
    }
  )
  return (
    <div>
    <div>{count}</div>
    <div>{name}</div>
    <button onClick={()=>{setCount(count+1)}}>Submit</button>
    </div>
    
  )
}

export default Count