import { getHeroesByPublisher } from '../helpers'
import { HeroItem } from "./HeroItem";

export const HeroList = ( { publisher }) => {

  const heroes = getHeroesByPublisher( publisher );

  const heroesList = heroes.map(( heroe => {
    return (
         <li key={ heroe.id }>
    <HeroItem heroe = { heroe }/>
   
    </li>
    )
 
  }))
   
  return (

  <ul>
   { heroesList }
  </ul>
    
  )
}
