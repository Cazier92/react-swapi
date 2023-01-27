
import { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";
import './StarshipList.css'


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
          <div key={starship.name}>
            <Link to='/starship-details' state={{starship}} className='link'>{starship.name}</Link>
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