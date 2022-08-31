import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {

const { id } = useParams();

const navigate = useNavigate();



const hero = getHeroById( id )


const imageUrl = `/assets/heroes/${ id }.jpg`

  const onClickBack = () => {

    navigate(-1)
    
  }

if( !hero ){
  return <Navigate to="/marvel"/>
}


  return (
    <div className='row mt-5'>
    <div className='col-4'>
      <img src={ imageUrl }
      alt={ hero.superhero }
      className='img-thumbnail'
      />
    </div>
    <div className='col-8'>
  <h3>{ hero && hero.superhero }</h3>
  <ul className='list-group list-group-flush'>
    <li className='list-group-item'> <b>Alter ego:</b> { hero.alter_ego } </li>
    <li className='list-group-item'> <b>First appearance:</b> { hero.first_appearance } </li>
    <li className='list-group-item'> <b>Publisher:</b> { hero.publisher } </li>
    <li className='list-group-item'> <b>Characters:</b> { hero.characters } </li>
  </ul>
  <button onClick={ onClickBack } className='btn btn-outline-primary mt-3'>Back</button>
    </div>
      
    </div>
  )
}
