import { authReducer, types } from '../../../src/auth';

describe('Pruebas sobre el authReducer', () => {

  const oneUser = {
        id:'ABC',
        name: 'Juanita'
    }

test('Debe de retornar el estado por defecto', () => { 

  const state = authReducer( { logged:false }, {});
  expect( state ).toEqual( { logged:false } )

 })

 test('Al hacer login debe autenticar y establecer el usuario', () => { 

    const action = {
        type: types.login ,
        payload: oneUser
    }
    const newState = authReducer( { logged:false }, action);
   // console.log(newState);
    expect( newState.logged ).toBeTruthy();
    expect( newState.user ).toEqual( oneUser );
  })

  test('Al hacer logout debe borrar el nombre del usuario y el logged debe ser falso', () =>{
  
    const state = {
        logged: true,
        user: oneUser
    }

    const action = {
        type: types.logout
    }
    const newState = authReducer( state, action );
    
    //console.log(newState);
    
    expect( newState.logged ).toBeFalsy();
    expect( newState.user ).not.toBeDefined();
  })
 })