import { Badge, Card, Checkbox } from "antd";
import PropTypes from "prop-types";
import { pokeTypesColors } from "@lib/constants.js";
import { uppercaseFirstLetter } from "@utils/util.js";

const PokemonCardTitle = ({ pokemonName, pokemonImage, pokemonNumber }) => {
  return (
    <div className="flex w-full justify-between items-center ">
      <div className="flex items-center gap-5">
        <img className="rounded-full size-20 " src={pokemonImage} />
        <p className="font-bold text-lg">{pokemonName}</p>
      </div>
      <p className="italic font-semibold">NO. {pokemonNumber}</p>
    </div>
  );
};

const PokemonCardMain = ({ pokemonName, pokemonType, isShiny }) => {
  return (
    <div className="flex justify-between">
      <span className="flex justify-start gap-5">
        {pokemonType.map((type) => (
          <Badge
            style={{ backgroundColor: pokeTypesColors[type] }}
            count={uppercaseFirstLetter(type)}
            key={`${pokemonName}-${type}`}
          ></Badge>
        ))}
      </span>
      <Checkbox checked={isShiny} className="flex items-center text-yellow-300">
        shiny⭐
      </Checkbox>
    </div>
  );
};

function PokemonCards({
  pokemonName,
  pokemonImage,
  pokemonType,
  isShiny,
  pokemonNumber,
}) {
  return (
    <Card
      className="w-1/4"
      style={{ borderColor: pokeTypesColors[pokemonType[0]] }}
    >
      <div className="h-full w-full flex flex-col gap-5">
        <PokemonCardTitle
          pokemonName={pokemonName}
          pokemonImage={pokemonImage}
          pokemonNumber={pokemonNumber}
        />
        <PokemonCardMain
          pokemonName={pokemonName}
          pokemonType={pokemonType}
          isShiny={isShiny ?? false}
        />
      </div>
    </Card>
  );
}

PokemonCards.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  pokemonImage: PropTypes.string.isRequired,
  pokemonType: PropTypes.array.isRequired,
  isShiny: PropTypes.bool,
  pokemonNumber: PropTypes.number.isRequired,
};

PokemonCardTitle.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  pokemonImage: PropTypes.string.isRequired,
  pokemonNumber: PropTypes.number.isRequired,
};

PokemonCardMain.propTypes = {
  pokemonType: PropTypes.array.isRequired,
  isShiny: PropTypes.bool,
  pokemonName: PropTypes.string.isRequired,
};

export default PokemonCards;
