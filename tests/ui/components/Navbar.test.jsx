import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from "../../../src/ui";

describe('Pruebas sobre el componente Navbar', () => {


    test('Debe de mostrar el nombre del usuario autenticado', () => { 
 const contextValue = {
    logged: true,
    user:{
        id:100,
        name: 'Ana' 
    }
 }
        render( 
            <MemoryRouter initialEntries={['/']} >
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        ) 
        expect( screen.getByText( contextValue.user.name )).toBeTruthy();
         screen.debug()
     })
   
    
});
