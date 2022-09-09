import { fireEvent, render, screen }  from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages';

describe('Pruebas sobre el componente SearchPage', () => {

    test('Debe de mostrarse correctamente con valores por defecto', () => {

       const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        expect( container ).toMatchSnapshot();
    })

    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {

         render(
             <MemoryRouter initialEntries={['/search?q=batman']}>
                 <SearchPage />
             </MemoryRouter>
         );
        
         const button = screen.getByRole('button');
            const input = screen.getByRole('textbox');
         fireEvent.click(button);
         expect(input.value).toBe('batman');
         const img = screen.getByRole('img');
         expect(img.src).toContain( "/assets/heroes/dc-batman.jpg"); 
      
     })

     test('Debe mostrar un error si no se encuentra el héroe buscado (batman123)', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );
       
        const button = screen.getByRole('button');
           fireEvent.click(button);
           expect(screen.getByText('No hero with')).toBeTruthy()
           screen.debug()
      })
})