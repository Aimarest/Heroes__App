


export const HeroItem = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
 }) => {
    
 const imageUrl = `/assets/${ id }.jpg`;

  return (

   <div className="col">
   <div className="card">
   <div className="row no-gutter">
   <div className="col-4">
    <img className="card-img" alt={ superhero } src={ imageUrl }/>
     <h1>{ superhero }</h1>
    <h2>{ publisher }</h2>
    <p>{ alter_ego }
    { first_appearance }
    { characters }
    </p>
   </div>
       
   </div>
  
   </div>
  
   </div>
  )
}
