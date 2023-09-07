import React from 'react'
import india from '../Component/asset/india.jpg';
import us from '../Component/asset/us.jpg';
import japan from '../Component/asset/japan.png';
import canada from '../Component/asset/canada.jpg';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import '../Component/style.css'

function ArrayObject() {
    const CountryFlag=[{
        "id":1,
        "countryname":"India",
        image:india,
    },
    {
        "id":2,
        "countryname":"US",
        image:us,
    },
    {
        "id":3,
        "countryname":"Japan",
        image:japan,
    },
    {
        "id":4,
        "countryname":"Canada",
        image:canada,
    }]

    const [search,setsearch]=useState(""); 
     const searchfilter =(e)=>{
        setsearch(e.target.value)
     }  
     const display=CountryFlag.filter( (sort)=>{
        return sort.countryname.toLocaleLowerCase().includes(search)
     });


  return (
    <Container>
    <div className='image'>
    {/* <div>
        <p>{CountryFlag[0].countryname}</p>
        <img src={india} alt="india" />

        <p>{CountryFlag[1].countryname}</p>
        <img src={us} alt="us" />

        <p>{CountryFlag[2].countryname}</p>
        <img src={japan} alt="japan" />

        <p>{CountryFlag[3].countryname}</p>
        <img src={canada} alt="canada" />
    </div> */}

<div>
<input className='p-2 m-2 border-1 border-rounded text-bg-muted' type='text'  onChange= {searchfilter}/>
<button className='p-1 m-1 border-1 border-rounded text-bg-success' onClick= {searchfilter}>Search</button>
<p>{search}</p>
{
    display.map( (flag)=>{
        return(
            <div key={flag.id} className='flagcont'>
            <p>{flag.id}</p>
            <p>{flag.countryname}</p>
            <img src={flag.image} alt={flag.countryname}/>
            
            </div>
        )
    })
}
</div>
</div>
</Container>
    
  )
}

export default ArrayObject


