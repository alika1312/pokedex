import PokemonCardWrapper from "@components/pokemonCard/PokemonCardWrapper";
import { PokemonFilterContext } from "@hooks/filterContext";
import Layout from "./layout";
import pokemonBg from "../assets/pokemon-bg2.png";

function HomePage() {
  return (
    <PokemonFilterContext>
      <Layout>
        <div
          className="min-h-screen bg-center"
          style={{ backgroundImage: `url(${pokemonBg})` }}
        >
          <PokemonCardWrapper />
        </div>
      </Layout>
    </PokemonFilterContext>
  );
}

export default HomePage;
