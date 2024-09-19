import Filter from "@components/filters";
import PokemonCardWrapper from "@components/pokemonCard/PokemonCardWrapper";
import { PokemonFilterContext } from "@hooks/filterContext";
import Layout from "./layout";
import { useQuery } from "@tanstack/react-query";

function HomePage() {
  const { data } = useQuery({
    queryKey: ["pokemon"],
  });
  console.log(data);
  return (
    <PokemonFilterContext>
      <Layout>
        <Filter />
        <PokemonCardWrapper />
      </Layout>
    </PokemonFilterContext>
  );
}

export default HomePage;
