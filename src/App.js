import react, { createContext } from "react";
import reactdom from "react-dom";
import ComA from './ComA'

import Class from './Class'

   
const { firstname}= createContext(); //create context

const App=()=>{
    return(

 <firstname.Provider value={"mandira"}> 

<ComA/>

</firstname.Provider>
   


    )}

export default App;

export {firstname}