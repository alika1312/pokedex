import { useQuery } from "@tanstack/react-query";
import {getPokemon} from '@lib/api.js'


export default function useFetchPokemon(pokemonName) {
    let {data} = useQuery({queryKey:['pokemon']})
    data = data ?? {};
    return useQuery({
        queryKey: ['pokemon'],
        queryFn: async () => {
            if(!data[pokemonName]) {
                const pokemonData = await getPokemon(pokemonName)
                data[pokemonName] = pokemonData;
            }
           return data
        } 
    });
    
    
}