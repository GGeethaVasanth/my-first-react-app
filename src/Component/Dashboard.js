import React from 'react'
import { Link } from 'react-router-dom'



function Dashboard() {
  return (


<ul>
    <li><Link to="/"> Home</Link></li>
    <li><Link to="about"> About </Link></li>
    <li><Link to="ArrayIteration"> ArrayIteration </Link></li>
    <li><Link to="Usestate"> Usestate </Link></li>
    <li><Link to="UseStateTask"> UseStateTask </Link></li>
    <li><Link to="Count"> Count </Link></li>
    <li><Link to="ArrayObject"> ArrayObject </Link></li>
    <li><Link to="ComponentB"> ComponentB </Link></li>
    <li><Link to="ClassComponent"> ClassComponent </Link></li>

</ul>


  )
}

export default Dashboard