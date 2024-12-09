import { useEffect, useState } from "react";
import axios from 'axios';

function PokemonCard({pokemon, onClick}){

    const [pokemonImg, setPokemonImg] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/task3/pokemon/image/${pokemon.id}`)
        .then((response) => {
            setPokemonImg(response.data);
        })
        .catch((error) => {
            console.error(":c", error);
        })
    }, [pokemon])

    return (
        <div className='PokemonCard' key={pokemon.id} onClick={onClick} >
            {pokemonImg && <img src={`data:image/png;base64, ${pokemonImg}`} alt={`${pokemon?.name.english} img`}/>}
            {pokemon.name.english}
        </div>
    )
}

export default PokemonCard;