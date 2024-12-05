import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';
import PokemonCard from './PokemonCard';

function Task3(){
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [shownPokemons, setShownPokemons] = useState([]);
    
    //Pokemon types and all pokemons
    useEffect(() => {
        axios.get("http://localhost:8000/task3/pokemon/types")
        .then((response) => {
            setPokemonTypes(response.data);
        })
        .catch((error) => {
            console.error(":c", error);
        })

        axios.get("http://localhost:8000/task3/pokemon/all")
        .then((response) => {
            setShownPokemons(response.data);
        })
        .catch((error) => {
            console.error(":c", error);
        })
    }, []);

    return (
        <div>
            {/* pokemon types */}
            <div className='CheckboxBox'>
                {
                    pokemonTypes.map((e, index) => {
                        return (
                            <span className='Checkbox' key={index}>
                                {e.english}
                                <input type='checkbox' defaultChecked={true} value={e.english}/>
                            </span>
                        )
                    })
                }
            </div>
            
            <div className='ShownPokemons'>
                {
                    shownPokemons.map((e, index) => <PokemonCard pokemon={e} /> )
                }
            </div>
        </div>
    );
}

export default Task3;