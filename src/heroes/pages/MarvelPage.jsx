import { HeroList } from "../components";

export const MarvelPage = () => {

  const publisher = 'Marvel Comics';

  return (
    <>
          <h1>MarvelPage</h1> 
          <hr/>
          <HeroList publisher={ publisher }/>
    </>
 
  )
}
