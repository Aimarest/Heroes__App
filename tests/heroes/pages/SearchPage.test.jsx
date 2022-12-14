import { fireEvent, render, screen }  from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages';


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () =>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))


describe('Pruebas sobre el componente SearchPage', () => {
    beforeEach(() => jest.clearAllMocks())

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
         //  screen.debug()
      })
      test('Debe de llamar el navigate a la pantalla nueva', () => {

        const inputValue = 'superman';
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );
       const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');
        // Si quisiera hacerlo con el form y lanzar el evento submit en vez de con el botón, tendría que añadirle un area-label al form en el componente, y después seleccionarlo por su label-text
           // const form = screen.getByLabelText('form-control');
            //fireEvent.submit(form);
        
        
        fireEvent.change(input,{target: { value: inputValue }});
           fireEvent.click(button);
         expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)
          // screen.debug()
      })
       })
