import PropTypes from "prop-types";
import { threeColors } from "@lib/constants";
import { Progress } from "antd";

const statNames = ["HP", "Attack", "Defense", "Sp.Atk", "Sp.Def", "Speed"];
const PokemonStats = ({ stats }) => {
  return (
    <div className="flex flex-col ml-80">
      {stats?.map((stat, index) => (
        <div key={index} className="flex items-center gap-3 mr-5">
          <div className="w-20 text-right">{statNames[index]}:</div>
          <p className="w-10">{stat.base_stat}</p>
          <Progress
            showInfo={false}
            className="w-96 ml-10"
            percent={(stat.base_stat / 150) * 100}
            strokeColor={threeColors}
          />
        </div>
      ))}
    </div>
  );
};

PokemonStats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      base_stat: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PokemonStats;
