import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { HeroItem } from '../components';
import { useNavigate, useLocation } from 'react-router-dom';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse( location.search ); // los query params son opcionales, por lo que pueden no venir, y SIEMPRE SON STRINGS
  const { searchText, onInputChange, onResetForm } = useForm({

    searchText:'',

  });

  const onSearchSubmit = (ev) =>{

    ev.preventDefault();
    if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`)
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Serching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange } />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results:</h4>
          <hr />
          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            No hero with <b>{ q }</b>
          </div>
        </div>

      </div>  
    </>
  )
}
