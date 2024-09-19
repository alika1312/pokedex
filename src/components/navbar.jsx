import Search from "antd/es/input/Search";
import { useContext } from "react";
import { FilterContext } from "@hooks/filterContext";
function Navbar() {
  const { filterState, handleSetFilters } = useContext(FilterContext);

  return (
    <div className="p-3 bg-red-600 flex justify-start items-center mb-2">
      <p className="font-bold  text-xl">Pokedex</p>
      <Search
        className="w-1/3 m-auto"
        onChange={(e) => handleSetFilters("search", e.target.value)}
        value={filterState.search}
      />
    </div>
  );
}

export default Navbar;
