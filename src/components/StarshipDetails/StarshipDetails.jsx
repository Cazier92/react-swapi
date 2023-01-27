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
    <h1 className="title">STAR WARS STARSHIPS</h1>
    <div className="details-body-div">
      <div  className="starship-details">
        <h3 className="details-content">Name: {starshipDetails.name}</h3>
        <h3 className="details-content">Model: {starshipDetails.model}</h3>
        <Link to='/starships' className="return-link">Return</ Link>
      </div>
    </div>
    </>
  );
}

export default StarshipDetails;