import { getImagen } from "../../base/11-async-await";

describe( 'Async Await Tests', () => { 
 test( 'debe de retornar un url de imagen', async () => { 
    const url = await getImagen();
    
    console.log(url);
    expect( url.includes( 'https://' ) ).toBe( true );

  });
}); 