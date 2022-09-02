import { PrivateRoute } from "../../src/router";
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';


import { MemoryRouter} from 'react-router-dom';  

describe('Pruebas en el componente PrivateRoute', () => { 

    test('Si está autenticado debe de mostrar el children', () => { 
        


        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged:true,
            user:{
                id:1000,
                name:'Pepito'
            }
        }
        
        render(
            
        <AuthContext.Provider value={ contextValue }>

            <MemoryRouter initialEntries={['/marvel']}>
                <PrivateRoute>
                    <h1>Ruta privada</h1>
                </PrivateRoute>
            </MemoryRouter>



        </AuthContext.Provider>
        )
        expect( screen.getByText('Ruta privada')).toBeTruthy()
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/marvel");
     })
 })