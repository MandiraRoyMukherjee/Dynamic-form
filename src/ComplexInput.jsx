import React,{useState} from 'react';
import './App.css';




const ComplexInput=()=>{

const[name,setname]=useState({

    fname: " ",
    lname: " "
});
// const[fullname,setfullname]=useState("");

// const[lastname,setlastname]=useState("");

// const[lastnamenew,setlastnamenew]=useState("");
const inputevent=(event)=>{


    console.log(event.target.value);
    console.log(event.target.name);
    const value=event.target.value;
    const name=event.target.name;

    setname((prevalue)=>{


//     if(name=="fname"){
//         return{
//             fname:value,
//             lname:prevalue.lname,



//         };
//     }
//     else{
//         return{

//             fname:prevalue.fname,
//             lname:value,
//         };
//     }
   
// });

return{

    ...prevalue,
    [name]:value,
}

    }

);



}

const onsubmit=(event)=>{
     event.preventDefault();
    // setfullname(name);
    // setlastnamenew(lastname);
    alert('form submitted');
}


// const inputeventtwo=(event)=>{


//     // console.log(event.target.value);
//     setlastname(event.target.value);
// }


return(
    <div >
        <form onSubmit={onsubmit}>
    
        <h1>hello {name.fname} {name.lname} </h1>
        <input type="text" placeholder='enter your name'
        onChange={inputevent} name="fname"
         value={name.fname}
        />
    <br/>
    <br/>
    
        <input type="text" placeholder='enter your last name'
        onChange={inputevent} name="lname"
         value={name.lname}
        />
        
           
    <br/> <br/>
            <button type="submit" >
            click me
            </button>
            </form>
    
            </div>
        )
    }
    
    
    
    
    export default ComplexInput;
