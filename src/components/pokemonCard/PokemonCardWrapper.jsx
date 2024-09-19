import { useQuery } from "@tanstack/react-query";
import { getAllPokemons } from "@lib/api.js";
import { getPokemonType } from "@lib/api.js";
import { Link } from "react-router-dom";
import { useContext, useMemo } from "react";
import { FilterContext } from "@hooks/filterContext.jsx";

// Logic as a wrapper for the cards
const PokemonCardWrapper = () => {
  const { filterState } = useContext(FilterContext);
  const { isLoading: isLoadingPokemon, data } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getAllPokemons,
  });
  const { isLoading: isLoadingType, data: dataType } = useQuery({
    queryKey: ["pokemonType", filterState.groupBy],
    queryFn: () => getPokemonType(filterState.groupBy),
  });

  const isLoading = useMemo(
    () => (isLoadingType || isLoadingPokemon) && (!data || !dataType),
    [data, dataType, isLoadingPokemon, isLoadingType]
  );

  const pokemons = useMemo(() => {
    if (filterState.groupBy === "all") {
      if (!data || !data.results) {
        console.error("No data available for pokemons.");
        return [];
      }
      return data.results.reduce(
        (pokemonList, { name }) => [...pokemonList, name],
        []
      );
    }
    if (!dataType || !dataType.pokemon) {
      console.error("No data available for pokemon types.");
      return [];
    }
    return dataType.pokemon.reduce(
      (pokemonDataType, { pokemon }) => [...pokemonDataType, pokemon?.name],
      []
    );
  }, [data, dataType, filterState.groupBy]);

  const filteredPokemons = useMemo(() => {
    let FilteredPokemons = [...pokemons];
    if (filterState.search !== "") {
      FilteredPokemons = FilteredPokemons?.filter((pokemonName) =>
        pokemonName.includes(filterState.search)
      );
    }
    if (filterState.sortBy === "abc") {
      FilteredPokemons = FilteredPokemons?.sort((a, b) => a.localeCompare(b));
    }
    return FilteredPokemons;
  }, [filterState.search, filterState.sortBy, pokemons]);

  if (isLoading) {
    return <p>We are loading...</p>;
  }

  return (
    <main className="flex flex-col gap-3 mt-3 mx-auto justify-center w-full h-full">
      <div className="grid grid-cols-3 gap-4">
        {filteredPokemons?.map((name) => (
          <Link
            className="cursor-pointer h-full w-fit "
            to={`/pokedex/${name}`}
            key={name}
          >
            {name}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default PokemonCardWrapper;
