import {getSaludo} from '../../base/02-template-string.js';
    
describe('02-Template-String Test', ()=> {
    test('getSaludo debe retornar hola + nombre', ( ) => {
        
        const nombre = 'Anthony';
        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre );
    });

    test('getSaludo debe retornar Hola + carlos cuando no se le pase nada', () => {
        const nombre = 'Anthony';
        const saludo = getSaludo();
        expect ( saludo ).toBe('Hola Carlos');
    });
});