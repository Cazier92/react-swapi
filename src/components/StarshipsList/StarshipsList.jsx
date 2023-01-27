
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
      <h1 className="title">STAR WARS STARSHiPS</h1>
      {starshipsList.length ?
      <>
        <div className="body-div">
          {starshipsList.map(starship => 
            <div key={starship.name} className='starship-div'>
              <Link to='/starship-details' state={{starship}} className='starship-link'>{starship.name}</Link>
            </div>
            )}
        </div>
      </>
      :
      <>
        <h4>Loading Starships...</h4>
      </>  
    }
    </>
  );
}

export default Starships;