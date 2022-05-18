
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import './App.css';
//import axios from "axios";





const Heading=()=>{

    const[num,setnum]=useState(1);
    const[name,setname]=useState();

    useEffect(()=>{

    //    alert("hi");
     async function getdata(){
         const res= await axios.get(
            'https://pokeapi.co/api/v2/pokemon/25'
        
         );
          console.log(res);
        // setname(res.data.name);
     }
     getdata();
   


    });







    return(
<div>

    
    <select value={num} onChange={(event)=> {

setnum(event.target.value);

    }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>

<h1>you choose {num}</h1>
<h1>hello name{name} height {} moves {}</h1>

        </div>
    )
    }





export default Heading;