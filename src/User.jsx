import react from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const User=()=>{

    const {fname} =useParams();
    const location=useLocation();
    const historty=useHistory();
return(

    <div>
    <h1>hello {fname} page</h1>

    <p>  my current location {location.pathname}  </p>

    {location.pathname==="/user/mandy" ? (
    <button  onClick={()=>historty.goBack()}  >click me</button>
    ) : null}

    </div>
)}

export default User;