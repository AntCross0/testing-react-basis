import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../data/heroes';

describe( 'Pruebas con Promesas', () => {
    test( 'getHeroeByIdAsync Debe de retornar un Heroe Async', ( done ) => {
        const idTest = 1;
        getHeroeByIdAsync(idTest).then( heroe => {
            expect( heroe ).toEqual(heroes[0]);
            done();
        });

    });

    test( 'getHeroeByIdAsync Debe de retornar un error si el heroe por id no existe', ( done ) => {
        const idTest = 1;
        getHeroeByIdAsync(idTest).catch( error => {

            expect( error ).toBe( 'No se pudo encontrar el héroe' );
            done();
        });

    });
});