import { authReducer, types } from '../../../src/auth';

describe('Pruebas sobre el authReducer', () => {

  const initialState = {
        id:'ABC',
        name: 'Juanita'
    }

test('Debe de retornar el estado por defecto', () => { 

  const newState = authReducer( initialState, {});
  expect( newState ).toBe( initialState )

 })

 test('Al hacer login debe autenticar y establecer el usuario', () => { 

    const action = {
        type: types.login ,
        payload: initialState
    }
    const newState = authReducer( initialState, action);
   // console.log(newState);
    expect( newState.logged ).toBeTruthy();
    expect( newState.user ).toEqual( initialState );
  })

  test('Al hacer logout debe borrar el nombre del usuario y el logged debe ser falso', () =>{
    const action1 = {
        type: types.login ,
        payload: initialState
    }
    const newState1 = authReducer( initialState, action1);

    const action2 = {
        type: types.logout
    }
    const newState2 = authReducer( newState1, action2);
    
    console.log(newState2);
    expect( newState2.logged ).toBeFalsy();
    expect( newState2.user ).not.toBeDefined();
  })
 })