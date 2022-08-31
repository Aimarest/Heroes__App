
import { Link } from "react-router-dom";

export const HeroItem = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
 }) => {
    
 const imageUrl = `/assets/heroes/${ id }.jpg`;

    return (

        <div className="col">
            <div className="card animate__animated animate__jackInTheBox">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img className="card-img " alt={ superhero } src={ imageUrl } />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h3 className="card-title">{ superhero }</h3>
                            <h5 className="card-subtitle">{ publisher }</h5>
                            <p className="card-text">{ alter_ego }   </p>
                            <p className="card-text"> <small className="text-muted">{ first_appearance }</small> </p>
                             
                            {
                                ( alter_ego !== characters ) && ( <p className="card-text">{ characters }</p> )
                            }
                         
                            <Link to={`/hero/${ id }` }>More...</Link>

                        </div>



                    </div>

                </div>

            </div>
        </div>
            )
}
