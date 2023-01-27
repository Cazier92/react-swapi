import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Starships from './components/StarshipsList/StarshipsList';
import './App.css';
import StarshipDetails from './components/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/starships' element={<Starships />}/>
      <Route path='/starship-details' element={<StarshipDetails />}/>
    </Routes>
    </>
  );
}

export default App;
