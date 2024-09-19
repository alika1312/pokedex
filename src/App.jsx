import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PokemonPage from "./pages/PokemonPage.jsx";
function App() {
  return (
    <Routes>
      <Route path="/pokedex" element={<HomePage />} />
      <Route path="/pokedex/:pokemonName" element={<PokemonPage />} />
    </Routes>
  );
}

export default App;
