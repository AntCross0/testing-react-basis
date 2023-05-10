import React from "react";
import PropTypes from "prop-types";


const PrimeraApp = ( { nombre = 'Sin Nombre'}) => {

//const nombre = 'Anthony';
const persona = {
    'name': 'Anthony',
    'age' : 64
}

    return <>
        <h1> Hola { nombre }</h1>   
        <p>Mi primera aplicacion</p>
    </>

    
}

PrimeraApp.propTypes = {
    nombre: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
    saludo: 'algo vacio'
}


export default PrimeraApp;