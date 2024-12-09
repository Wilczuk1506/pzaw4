import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';
import PokemonCard from './PokemonCard';

function Task3(){
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [shownPokemons, setShownPokemons] = useState([]);

    const [selectedTypes, setSelectedTypes] = useState([]);
    const [name, setName] = useState('');

    const [selectedPokemon, setSelectedPokemon] = useState(null);

    //Pokemon types and all pokemons
    useEffect(() => {
        axios.get("http://localhost:8000/task3/pokemon/types")
        .then((response) => {
            setPokemonTypes(response.data);
            setSelectedTypes(response.data.map((item) => item.english));
        })
        .catch((error) => {
            console.error(":c", error);
        })
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8000/task3/pokemon", {
            params: {
                name : name,
                types : selectedTypes,
            }
        })
        .then((response) => {
            setShownPokemons(response.data);
        })
        .catch((error) => {
            console.error(":c", error);
        })       
    }, [selectedTypes, name])

    const updatePokemonList = (e) => {
        setSelectedTypes(
          e.target.checked
            ? [...selectedTypes, e.target.value]
            : selectedTypes.filter((type) => type !== e.target.value),
        );
        console.log(selectedTypes);
      };

    return (
        <div className='d-flex'>
            <div className='w-50'>
                <div className=''>
                    {
                        pokemonTypes.map((e, index) => {
                            return (
                                <span className='form-check form-check-inline' key={index}>
                                    <input className='form-check-input' id={"chckbox" + index} type='checkbox' defaultChecked={true} value={e.english} onChange={updatePokemonList}/>
                                    <label className='form-check-label' for={"chckbox" + index}>{e.english}</label>
                                </span>
                            )
                        })
                    }
                </div>
                <div className='w-100'>
                    <input className='input-group-text' type='text' onChange={(e) => setName(e.target.value)} />
                    <div className='d-flex flex-nowrap w-80 overflow-x-scroll'>
                        {
                            shownPokemons.map((e, index) => <PokemonCard pokemon={e} onClick={() => setSelectedPokemon(e)} /> )
                        }
                    </div>
                </div>
            </div>
            <div className='w-50'>
                {
                    selectedPokemon && ( 
                        <div className='d-flex'>
                            <div>
                                <PokemonCard pokemon={selectedPokemon}/>
                            </div>
                            <div>
                                <p>Stats:</p>
                                Hp: {selectedPokemon.base.HP}<br />
                                Attack: {selectedPokemon.base.Attack}<br />
                                Defense: {selectedPokemon.base.Defense}<br />
                                Sp. Attack: {selectedPokemon.base["Sp. Attack"]}<br />
                                Sp. Defense: {selectedPokemon.base["Sp. Defense"]}<br />
                                Speed: {selectedPokemon.base.Speed}
                            </div>
                        </div>
                    )
                }
            </div>         
        </div>
    );
}

export default Task3;