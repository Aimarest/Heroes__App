


export const HeroItem = ({ 
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
 }) => {
    
 

  return (
   <>
    <h1>{ superhero }</h1>
    <h2>{ publisher }</h2>
    <p>{ alter_ego }
    { first_appearance }
    { characters }
    </p>
   </>
  )
}
