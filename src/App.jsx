import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PokemonPage from "./pages/PokemonPage.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:pokemonName" element={<PokemonPage />} />
    </Routes>
  );
}

export default App;
