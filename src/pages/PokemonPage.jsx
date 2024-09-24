import PokemonImage from "@components/pokemonCard/pokemonImage";
import PokemonInfo from "@components/pokemonCard/pokemonInfo";
import PokemonStats from "@components/pokemonCard/pokemonStats";
import ShinyToggle from "@components/pokemonCard/ShinyToggle";
import { pokeTypesColors } from "@lib/constants";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchPokemon from "../hooks/useFetchPokemon";
import { ArrowLeft } from "lucide-react";
import { Button } from "antd";
import pokemonBg from "../assets/pokemon-bg2.png";

const PokemonPage = () => {
  const { pokemonName } = useParams(); // Get the name from the URL

  const { data, isLoading, isError } = useFetchPokemon(pokemonName);
  const [isShiny, setIsShiny] = useState(false);

  console.log(isLoading);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching Pokémon data.</p>;
  }

  return (
    <div
      className="min-h-screen bg-center"
      style={{ backgroundImage: `url(${pokemonBg})` }}
    >
      <Link className="gap-7 ml-5" to="/pokedex">
        <Button>
          <ArrowLeft />
        </Button>
      </Link>
      <div className="flex flex-row justify-evenly gap-1 mt-8">
        <ShinyToggle isShiny={isShiny} setIsShiny={setIsShiny} />
        <PokemonImage
          pokemonName={pokemonName}
          sprite={
            isShiny
              ? data[pokemonName]?.sprites?.front_shiny
              : data[pokemonName]?.sprites?.front_default
          }
        />
        <PokemonInfo
          data={data[pokemonName]}
          pokeTypesColors={pokeTypesColors}
        />
      </div>
      <div className="flex justify-center mt-16 font-bold">Base Stats</div>
      <PokemonStats stats={data[pokemonName]?.stats} />
    </div>
  );
};

export default PokemonPage;
