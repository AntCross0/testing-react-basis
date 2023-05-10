import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Heroes tests', () => {
    test('Debe retornar un Heroe por Id', () => {
        const idTest = 1;
        const heroe = getHeroeById(idTest);

        const heroeData = heroes.find( h => h.id === idTest );
        expect( heroe ).toEqual( heroeData );
    });

    test('Debe retornar undefined cuando no exista el Id', () => {

        const idTest = 10;
        const heroe = getHeroeById( idTest);

        expect( heroe ).toBe( undefined );
    });

    test('Debe retornar un arreglo con los heroes de DC', () => {

        const ownerTest = 'DC';
        const heroesOwners = getHeroesByOwner( ownerTest );
        const heroeData = heroes.filter( h => h.owner === ownerTest);

        expect( heroesOwners ).toEqual( heroeData);

    });


    test('debe retornar un arreglo con los heroes de Marvel y lenght === 2', () => {
        const ownerTest = 'Marvel';
        const heroesOwners = getHeroesByOwner( ownerTest );
        
        expect( heroesOwners.length ).toBe( 2 );
    });
});