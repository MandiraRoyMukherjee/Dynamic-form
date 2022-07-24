import react from 'react';
import { Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import User from './User';
   
const Home=()=>{


const Name=()=>{
    return <h1> hello name</h1>
};

return(

   <div>

     <Menu/>

       <switch>

           <Route exact path='/'  component={About} />
           <Route exact path='/contact' component={Contact} />
           <Route   path='/contact/Name' component={Name} />

           <Route   path='/user/:fname' component={User} />
           {/* <Route exact  component={Error} /> */}

           {/* <Redirect to="/" /> */}
       </switch>

       {/* <About/>
       <Contact/> */}
   </div>
)}

export default Home;