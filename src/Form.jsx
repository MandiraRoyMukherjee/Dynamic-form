// // import react from "react";
// // import reactdom from "react-dom";
// import react from 'react';
// import { Route, Switch } from "react-router-dom";

// import About from './About';
// import Contact from './Contact';
// import Error from './Error';


// const data={
//     "fields": [
//         {
//           "label": "Date of Birth (YYYY-MM-DD)",
//           "key": "birthday",
//           "isRequired": true,
//           "order": 1,
//           "isReadonly": false,
//           "type": "date"
//         },
//         {
//           "label": "Gestational Age",
//           "key": "gestationalAge",
//           "isRequired": true,
//           "order": 3,
//           "unit": "weeks",
//           "isReadonly": false,
//           "type": "number"
//         },
//         {
//           "label": "Sex",
//           "items": [
//             {
//               "value": "male",
//               "text": "Male"
//             },
//             {
//               "value": "female",
//               "text": "Female"
//             }
//           ],
//           "key": "sex",
//           "isRequired": true,
//           "order": 4,
//           "isReadonly": false,
//           "type": "dropdown"
//         },
//         {
//           "label": "Height",
//           "key": "height",
//           "isRequired": true,
//           "order": 5,
//           "unit": "cm",
//           "isReadonly": false,
//           "type": "number"
//         },
//         {
//           "label": "Weight",
//           "key": "weight",
//           "isRequired": true,
//           "order": 6,
//           "unit": "kg",
//           "isReadonly": false,
//           "type": "number"
//         },
//         {
//           "label": "BMI",
//           "key": "bmi",
//           "order": 11,
//           "unit": "kg/m²",
//           "isReadonly": true,
//           "type": "number"
//         }
//       ]
//   }


   
// const Home=()=>{

//     const onSubmit=(e)=>{
        
//         e.preventDefault();

//     }




// return(

//    <div>
    
// <form onSubmit={onSubmit}>

//     {
//         data.fields.map(formdata=>{

//             console.log("formdata",formdata)

//             if(formdata.type==="number" || formdata.type==="date" ){


//             return(
                

//                <div>
                    
                   
//                   {/* formdata.type==="number" */}
                  
//                     <label>{formdata.label}</label> <br/>

//                   <input type={formdata.type}  name={formdata.key} required={formdata.isRequired}  />
//                   {/* ?  formdata.type==="dropdown" */}
        
// {/* :

// "" */}
            

                    

                    
                    
//                </div>

                    

//                   )
// }
// else {

//     return(

//         <div>
//              <label>{formdata.label}</label> <br/>

// {/* <input   name={formdata.key} required={formdata.isRequired}  /> */}

// <select  name={formdata.key} required={formdata.isRequired} >
//     <option  value={formdata.items}> Male</option>
//     <option  value={formdata.items}> Female</option>
// </select>
//         </div>
//     )
// }
 






//         })
    
//     }
   
//     <br/>
//     <button type="onSubmit">submit</button>
// </form>
     
//    </div>
// )}

// export default Home;