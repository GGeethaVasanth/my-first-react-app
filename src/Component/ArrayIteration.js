import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function ArrayIteration() {
const num=[1,2,3,4,5]
const obj=[{"id":1, "name":"A"},{"id":2, "name":"B"},]


  return (
    <Container>
    <div>
     {
      num.map((items)=>{
        return(
        <div className="w-25">

          <p className="p-2 m-3 text-bg-success text-center fs-3">{items}</p>
        </div>
        )
      })
     }    
    </div>
    </Container>

  )
}

export default ArrayIteration