import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('05-Funciones TESTS', () => {

    test('getUser debe retornar un objeto', () => {
        
        const userTest = { 
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();


        expect( userTest ).toEqual( user );
    });


    test('getUsuarioActivo debe retornar un objeto con argumento', ()=>{
        const nombre = 'Anthony';
        const userTest = { 
            uid: 'ABC567',
            username: nombre,
        }
        const user = getUsuarioActivo( nombre );

        expect( userTest ).toEqual( user );
    });
});