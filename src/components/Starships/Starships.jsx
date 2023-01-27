import { async } from "q";
import { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";


const Starships = () => {
  const [starshipsList, setStarshipsList] = useState([])

  useEffect(() => {
    const fetchStarshipsList = async () => {
      const starshipData = await getAllStarships()
      setStarshipsList(starshipData.results)
    }
    fetchStarshipsList()
  }, [])
  return ( 
    <>
      <h1>STAR WARS STARSHIPS</h1>
      {starshipsList.length ?
      <>
        {starshipsList.map(starship => 
          <div key={starship.model}>
            <h5>{starship.name}</h5>
          </div>
          )}
      </>
      :
      <>
        <h4>Loading Starships</h4>
      </>  
    }
    </>
  );
}

export default Starships;