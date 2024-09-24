import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPokemon } from "@lib/api";
import { pokeTypesColors } from "@lib/constants";
import Loading from "@components/loading";

const PokemonInfo = () => {
  const { pokemonName } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["pokemoninfo"],
    queryFn: () => getPokemon(pokemonName),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold">POKEDEX DATA</div>
      <div className="font-extralight">dex number: {data.id}</div>
      <div className="font-extralight flex flex-row gap-1">
        Type:
        {data?.types?.map((typeObj, index) => (
          <p
            className="border-2 rounded-lg p-1"
            key={index}
            style={{ color: pokeTypesColors[typeObj.type.name] }}
          >
            {typeObj.type.name}
          </p>
        ))}
      </div>
      <p>weight: {data.weight}</p>
      <p>height: {data.height}</p>
      <div className="font-extralight">
        <p>Abilities:</p>
        <div className="flex flex-col">
          {data.abilities.map((abilityObj, index) => (
            <p key={index} className="ml-4">
              {abilityObj.is_hidden
                ? `${abilityObj.ability.name} (Hidden ability)`
                : abilityObj.ability.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
