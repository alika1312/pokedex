import Search from "antd/es/input/Search";
import { useContext } from "react";
import { FilterContext } from "@hooks/filterContext";
import Filter from "./filters";
function Navbar() {
  const { filterState, handleSetFilters } = useContext(FilterContext);

  return (
    <div className="flex sticky top-0 flex-col z-50">
      <div className="p-3   w-full bg-red-600 flex justify-start items-center mb-2">
        <p className="font-bold  text-xl">Pokedex</p>
        <Search
          className="w-1/3 m-auto"
          onChange={(e) => handleSetFilters("search", e.target.value)}
          value={filterState.search}
        />
      </div>
      <Filter />
    </div>
  );
}

export default Navbar;
