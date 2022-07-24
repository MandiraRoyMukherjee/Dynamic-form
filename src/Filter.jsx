import react from 'react';
import { useState } from 'react';
   
const Filter=()=>{

    const[fruit,setfruit]=useState("");

    const inputevent=(event)=>{
        const data=event.target.value;
      //  console.log(data);

      const list=['orange','apple','guava','bannana']



      const filter=list.filter((data)=>{
    
        
            if(data==="orange" ||data==="apple" || data==="guava" || data==="bannana"  ){

                return data;
               
            }
            
            else{
                return(" ")
            }

          

     
          
      })
      console.log(filter)

      

    //   for(var i=0;i<list.length;i++){
    //       if(data===list[i]){
    //         console.log(data);
    //       }

    //       else{
    //         console.log(" ");
    //       }
    //   }

        // if(data==="orange" ||data==="apple" || data==="guava" || data==="bannana"  ){

        //     console.log(data);
        // }

        // else{
        //     console.log(" "); 
        // }




     
    }



return(

    <div>

    <h1>hello filter</h1>

    <form>

    <input type="text"  name="search" onChange={inputevent} ></input>



</form>

    </div>
)}

export default Filter;