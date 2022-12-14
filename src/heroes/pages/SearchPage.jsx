import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';

import { getHeroesByName } from '../helpers';
import { HeroItem } from '../components';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search ); // los query params son opcionales, por lo que pueden no venir, y SIEMPRE SON STRINGS


  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({

    searchText:q,

  });

  const onSearchSubmit = (ev) =>{

    ev.preventDefault();
    navigate(`?q=${ searchText }`);
    
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form aria-label='form-control' onSubmit={onSearchSubmit}>
            <input type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange } />
            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results:</h4>
          <hr />
          {
            ( q === '')
            ?   <div className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div>
            :   ( heroes.length === 0 ) &&  <div className="alert alert-danger animate__animated animate__fadeIn">No hero with <b>{ q }</b></div>
          }
        
         
          { 
            heroes.map( hero => (
            <HeroItem key={ hero.id }{...hero }/>
          ))
          }
        </div>

      </div>  
    </>
  )
}
