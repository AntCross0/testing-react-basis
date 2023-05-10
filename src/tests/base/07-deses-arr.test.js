import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en desestructuracion', () => {
    test('retornarArreglo debe ser un string y un numero', ()=> {

        const arr = retornaArreglo();  //['ABC' , 123]


        //es lo mismo pero usando la desestructuracion.
        const [letras, numero] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(numero).toBe( 123 );

        expect(typeof letras).toBe( 'string' );

        expect(typeof numero).toBe( 'number' );

        expect( arr ).toEqual( [ "ABC", 123 ]);

    
    });
});