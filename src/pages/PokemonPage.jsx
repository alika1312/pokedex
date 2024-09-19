import PokemonImage from "@components/pokemonCard/pokemonImage";
import PokemonInfo from "@components/pokemonCard/pokemonInfo";
import PokemonStats from "@components/pokemonCard/pokemonStats";
import ShinyToggle from "@components/pokemonCard/ShinyToggle";
import { pokeTypesColors } from "@lib/constants";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchPokemon from "../hooks/useFetchPokemon";

const PokemonPage = () => {
  const { pokemonName } = useParams(); // Get the name from the URL

  const { data, isLoading, isError } = useFetchPokemon(pokemonName);
  const [isShiny, setIsShiny] = useState(false);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching Pokémon data.</p>;
  }

  return (
    <>
      <Link className="gap-7 ml-5" to="/pokedex">
        ⬅️
      </Link>
      <div className="flex flex-row justify-evenly gap-1 mt-8">
        <ShinyToggle isShiny={isShiny} setIsShiny={setIsShiny} />
        <PokemonImage
          pokemonName={pokemonName}
          sprite={
            isShiny
              ? data[pokemonName]?.sprites.front_shiny
              : data[pokemonName]?.sprites.front_default
          }
        />
        <PokemonInfo
          data={data[pokemonName]}
          pokeTypesColors={pokeTypesColors}
        />
      </div>
      <div className="flex justify-center mt-16 font-bold">Base Stats</div>
      <PokemonStats stats={data[pokemonName]?.stats} />
    </>
  );
};

export default PokemonPage;
