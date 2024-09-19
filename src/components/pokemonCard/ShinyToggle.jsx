import Checkbox from "antd/es/checkbox/Checkbox";
import PropTypes from "prop-types";

const ShinyToggle = ({ isShiny, setIsShiny }) => (
  <div>
    SHINY⭐
    <Checkbox onChange={() => setIsShiny(!isShiny)} checked={isShiny} />
  </div>
);

ShinyToggle.propTypes = {
  isShiny: PropTypes.bool.isRequired,
  setIsShiny: PropTypes.func.isRequired,
};

export default ShinyToggle;
