test( 'deben ser iguales los strings', () => {
    
    //1. inicializacion
    const mensaje1 = 'Hola mundo';

    //2. estimulacion
    const mensaje2 = `Hola mundo`;

    //3. observar comportamiento

    expect( mensaje1 ).toBe(mensaje2); 


}); 