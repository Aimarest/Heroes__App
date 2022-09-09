import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter , useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () =>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))
describe('Pruebas sobre el componente Navbar', () => {

const contextValue = {
    logged: true,
    user:{
        id:100,
        name: 'Ana' 
    },
    logout: jest.fn()
 }
 beforeEach( () => jest.clearAllMocks() );
    test('Debe de mostrar el nombre del usuario autenticado', () => { 
 
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter >
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>

        ) 
        expect( screen.getByText( contextValue.user.name )).toBeTruthy();
         
     })
   
     test('Debe de llamar el logout y el navigate con el login y el replace cuando hago click en el logout', () => { 
         render(
             <AuthContext.Provider value={contextValue}>
                 <MemoryRouter>
                     <Navbar />
                 </MemoryRouter>
             </AuthContext.Provider>

         );
               const btn = screen.getByRole('button');
               fireEvent.click(btn);

                expect(contextValue.logout).toHaveBeenCalled();
               expect( mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true})
            })
            
    
       
    
});
