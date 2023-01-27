import { Link } from "react-router-dom";
import Starships from "../StarshipsList/StarshipsList";
import './NavBar.css'

const NavBar = () => {
  return ( 
    <header>
      <Link to='/' className="link">Home</Link>
      <Link to='/starships' element={<Starships />} className="link">Starships</Link>
    </header>
  );
}

export default NavBar;