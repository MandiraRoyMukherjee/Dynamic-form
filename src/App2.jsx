import react from 'react';
import "./App.css";


import { useSelector, useDispatch } from "react-redux";
import {incNumber} from "./action/index";
import {decNumber} from "./action/index"
import {mulNumber} from "./action/index"
import { divNumber } from './action/index';


   
const App2=()=>{

    const changeTheNumber = useSelector(state => state.changeTheNumber);
    const changeTheNumber2 = useSelector(state => state.changeTheNumber2);

  
const dispatch = useDispatch();
return(


    <>
    <div className="main-div">
    

    <div class="container">

    <h1>Increment/Decrement counter</h1>
    <h4>using React and Redux</h4>
    
    <div class="quantity">
      <a class="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
      <input name="quantity"  class="quantity__input" value={changeTheNumber}   />
      <a class="quantity__plus" title="Increment"  onClick={() => dispatch(incNumber())} ><span>+</span></a>
    </div>

        </div>

        <div class="container">

<h1>Multi/Divide counter</h1>
<h4>using React and Redux</h4>

<div class="quantity">
  <a class="quantity__minus" title="Decrement" onClick={() => dispatch(divNumber())}><span>/</span></a>
  <input name="quantity"  class="quantity__input" value={changeTheNumber2}   />
  <a class="quantity__plus" title="Increment"  onClick={() => dispatch(mulNumber())} ><span>*</span></a>
</div>

    </div>
      </div>
  </>
)}

export default App2;