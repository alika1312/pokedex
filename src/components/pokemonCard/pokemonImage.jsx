import PropTypes from "prop-types";

const PokemonImage = ({ pokemonName, sprite }) => (
  <div className="font-bold first-letter:uppercase">
    {pokemonName}
    <img src={sprite} alt={`${pokemonName} sprite`} width="200" height="400" />
  </div>
);

PokemonImage.propTypes = {
  sprite: PropTypes.string.isRequired,
  pokemonName: PropTypes.string.isRequired,
};

export default PokemonImage;
