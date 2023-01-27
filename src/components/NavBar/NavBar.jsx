import { Link } from "react-router-dom";
import Starships from "../StarshipsList/StarshipsList";

const NavBar = () => {
  return ( 
    <header>
      <Link to='/starships' element={<Starships />}>Starships</Link>
    </header>
  );
}

export default NavBar;