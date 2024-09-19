import { Select } from "antd";
import { useContext } from "react";
import { pokeTypesColors } from "@lib/constants";
import { FilterContext } from "@hooks/filterContext";
import { uppercaseFirstLetter } from "@utils/util";

const selectOptions = Object.keys(pokeTypesColors).map((type) => (
  <Select.Option
    key={type}
    style={{ color: pokeTypesColors[type] }}
    value={type}
  >
    {uppercaseFirstLetter(type)}
  </Select.Option>
));

function Filter() {
  const { filterState, handleSetFilters } = useContext(FilterContext);
  console.log(filterState.groupBy);

  return (
    <div className="w-fit ml-auto mr-4">
      <Select
        className="mr-4 w-24"
        placeholder="Sort by"
        onChange={(value) => handleSetFilters("sortBy", value)}
        value={filterState.sortBy}
      >
        <Select.Option value="abc">ABC</Select.Option>
        <Select.Option value="dex">Dex Num</Select.Option>
      </Select>
      <Select
        className="w-64"
        placeholder="Please select a type"
        onChange={(value) =>
          value === "all"
            ? handleSetFilters("groupBy", "all")
            : handleSetFilters("groupBy", value)
        }
        value={filterState.groupBy}
      >
        <Select.Option value="all">All</Select.Option>
        {selectOptions}
      </Select>
    </div>
  );
}

export default Filter;
