


export const HeroItem = ({ heroe }) => {

  return (
   <>
    <h1>{ heroe.superhero }</h1>
    <h2>{ heroe.publisher }</h2>
    <p>{ heroe.alter_ego }
    { heroe.first_appearance }
    { heroe.characters }
    </p>
   </>
  )
}
