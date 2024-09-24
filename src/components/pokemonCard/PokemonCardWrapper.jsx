import { FilterContext } from "@hooks/filterContext.jsx";
import { getAllPokemons, getPokemonType } from "@lib/api.js";
import { useQuery } from "@tanstack/react-query";
import { Empty } from "antd";
import { useContext, useMemo } from "react";
import PokemonPageLink from "../PokemonPageLink";

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
    return (
      <main className="flex flex-col gap-3 mt-3 mx-auto justify-center w-full h-full">
        <Empty />
      </main>
    );
  }

  return (
    <main className="flex flex-col gap-3 mt-3 mx-auto justify-center w-full h-full">
      <div className="grid grid-cols-3 gap-4 p-2">
        {filteredPokemons?.map((pokemonName) => (
          <PokemonPageLink pokemonName={pokemonName} key={pokemonName} />
        ))}
      </div>
    </main>
  );
};

export default PokemonCardWrapper;
