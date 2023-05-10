import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe( 'PrimeraApp Component Test', () => { 
 test( 'Debe retornar el texto con parametro', () => { 
    const nombre = 'Anthony';
    const { getByText } = render ( <PrimeraApp nombre={ nombre } />);

    expect( getByText( 'Hola ' + nombre ) ).toBeInTheDocument();
  });
}); 
