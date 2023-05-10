import React,{ useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { numero = 10 }) => {

    const [ counter, setCounter ] = useState( numero );

    const handleAdd = ( ) => {   
        setCounter( counter + 1 );
    }

    const handleSubstract = () => {
        setCounter( counter - 1);
    }

    const handleReset = () => {
        setCounter( numero );
    }
    
    return <>
        <h1>Counter App</h1>
        <h2> { counter }</h2>
        <button onClick={  handleAdd  }>Aumentar +1 </button>
        <button onClick={  handleSubstract  }>Restar -1 </button>
        <button onClick={  handleReset  }>Reset </button>
    </>

}

CounterApp.propTypes = {
    numero : PropTypes.number.isRequired
}



export default CounterApp;