import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';

import { AppRouter } from '../../src/router';

describe('Pruebas en el componente AppRouter', () => {
    
    test('Debe mostrar el login si no está autenticado el usuario', () => {
        const contextValue = {
            logged:false,
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>

                    <AppRouter />

                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getAllByText('Login').length).toBe(2)
        
    })


    test('Debe de mostrar el componente de marvel si está autenticado', () => { 
        const contextValue = {
            logged:true,
            user:{
                id:100,
                name:'Ana'
            }
        }
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>

                    <AppRouter />

                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( screen.getByText('MarvelPage')).toBeTruthy();
        
        //screen.debug();
     })
});
