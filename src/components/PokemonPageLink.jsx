import { Button } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PokemonPageLink = ({ pokemonName }) => {
  return (
    <Link className="h-full w-fit " to={`/pokedex/${pokemonName}`}>
      <Button>{pokemonName}</Button>
    </Link>
  );
};
PokemonPageLink.propType = {
  pokemonName: PropTypes.string.isRequired,
};

export default PokemonPageLink;
