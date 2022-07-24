import react from "react";
import reactdom from "react-dom";
import { firstname } from "./App";


   
const ComC=()=>{
    return(

        <div>
          {/* hello from  */}

<firstname.Consumer>{(fname)=>{ //consumer
    return <h1>hello {fname} </h1>


    }}

</firstname.Consumer>

        </div>




    
    )}

export default ComC;