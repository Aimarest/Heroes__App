import { getHeroesByPublisher } from '../helpers'
import { HeroItem } from "./HeroItem";

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher);

  const heroesList = heroes.map((hero => {

    return (
      <li key={hero.id}>
        <HeroItem {...hero} />

      </li>
    )

  }))

  return (

    <div className='row rows-cols-1 row-cols-md-3 g-3'>

      {heroesList}

    </div>

  )
}
