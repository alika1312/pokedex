import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPokemon } from '@lib/api.js';

export default function useFetchPokemon(pokemonName) {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ['pokemon'],
        
    });
    console.log(isLoading)

 
    return useQuery({
        queryKey: ['pokemon', pokemonName],
        queryFn: async () => {
            if (data?.[pokemonName]) {
                return data;
            } else {
                const pokemonData = await getPokemon(pokemonName);
                const updatedData = { ...data, [pokemonName]: pokemonData };
                queryClient.setQueryData(['pokemon'], updatedData);
                console.log(updatedData)
                return updatedData;
               
            }
        },
        
    });
}
