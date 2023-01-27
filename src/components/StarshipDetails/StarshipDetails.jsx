import { useEffect, useState } from "react";
import { getDetails } from "../../services/sw-api";
import { Location, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import './StarshipDetails.css'

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])
  return ( 
    <>
    {/* {starshipDetails.length} */}
    <h1>{starshipDetails.name}</h1>
    <h3>{starshipDetails.model}</h3>
    <Link to='/starships' className="return-link">Return</ Link>
    </>
  );
}

export default StarshipDetails;