import React    from "react";
import ReactDOM from "react-dom/client";
import PrimeraApp from "./PrimeraApp";
//import CounterApp from "./CounterApp";
import './index.css';


const divRoot = document.querySelector('#root');

//ReactDOM.createRoot( divRoot ).render( <CounterApp numero={1} />  );
ReactDOM.createRoot( divRoot ).render( <PrimeraApp nombre={'Manuel'} />  );



    