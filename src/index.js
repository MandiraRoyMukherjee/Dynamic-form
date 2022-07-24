//var react=require('react');
import React from 'react';
// import App from './App';
// import "../style/main.css";
import './App.css';
import Heading from './Heading.jsx'
import Home from './Home'
import App from './App.js'
import ComplexInput from './ComplexInput';

import { BrowserRouter } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Button from '@material-ui/core/Button';
//var reactdom=require('react-dom');
import ReactDOM from 'react-dom';
import Sdata from './Sdata';
import Classcomp from './Classcomp';
import Filter from './Filter'
import Todo from './Todo'
import Class from './Class'

 import App2 from './App2'

 import Store from "./Store";
 import { Provider } from "react-redux";


 Store.subscribe(() => console.log(Store.getState()));










ReactDOM.render(







//<BrowserRouter>
//<Home/>

//</BrowserRouter>

<Provider store={Store}>
<App2 />
</Provider>



//<Filter/>

//<Todo />

//<Class />



  // <ComplexInput/>

  //<Heading/>




 
 
 



 


 



 
  
  ,document.getElementById('root')
);

