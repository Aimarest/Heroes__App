import { PublicRoute } from '../../src/router';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas sobre el componente PublicRoute ', () => { 


    test('Si no está autenticado el usuario debe de mostrar el children', () => { 

         const  contextValue = {
            logged:false,
         } 
        render( 
            <AuthContext.Provider value={ contextValue }>
                  <PublicRoute>
                    <h1>Ruta pública</h1>
                  </PublicRoute> 
            </AuthContext.Provider>
      );

            expect( screen.getByText('Ruta pública')).toBeTruthy();
     })

     test('Si está autenticado debe de navegar a la pagina de Marvel', () => { 
        
        const  contextValue = {
            logged:true,
            user:{
                id:1000,
                name:'Pepito'
            }
        }
            render(

                <AuthContext.Provider value={ contextValue }>

                <MemoryRouter initialEntries={['/login']}>

                <Routes>

                    <Route path='login' element={   <PublicRoute> <h1>Ruta pública</h1> </PublicRoute> } />
                    <Route path="marvel" element={ <h1>Pagina Marvel</h1>}/>
                    
                </Routes>
               
                </MemoryRouter>
              
          </AuthContext.Provider>

            )
            expect( screen.getByText('Pagina Marvel')).toBeTruthy();
         })

      })

 