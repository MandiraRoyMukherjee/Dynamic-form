import react from "react";
import reactdom from "react-dom";
import { NavLink } from "react-router-dom";


   
const Menu=()=>{
    return(

        <div>

            <NavLink to="/">about us</NavLink>

            <NavLink to="/contact">contact us</NavLink> 
            <NavLink to="/user/mandy">user us</NavLink> 
            
            <br/> <br/>
        
      <a href="/">about</a>
      <a href="/contact">contact</a>
        </div>


    
    )}

export default Menu;