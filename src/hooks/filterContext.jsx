import { createContext, useState } from "react";
import PropTypes from "prop-types";

const initialData = {
  search: "", // contain string
  groupBy: "all", // pokemon types
  sortBy: "dex", // sort types => 'abc' || 'dex number'
};

export const FilterContext = createContext(initialData);

export function PokemonFilterContext({ children }) {
  const [filterState, setFilterState] = useState(initialData);

  const handleSetFilters = (key, value) => {
    setFilterState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  return (
    <FilterContext.Provider
      value={{ filterState, setFilterState, handleSetFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
}

PokemonFilterContext.propTypes = {
  children: PropTypes.node.isRequired,
};
