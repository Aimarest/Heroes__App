import { types } from '../../../src/auth'


describe('Pruebas en el fichero types', () => {
    
    test('Debe de regresar estos types', () => { 

        expect(types).toEqual( {
            
            login: '[AUTH] Login',
            logout: '[AUTH] Logout'  }
     
      )})




  })
