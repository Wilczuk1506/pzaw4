import axios from 'axios';
import { useEffect, useState } from 'react';

function Task3(){
    const [pokemonTypes, setPokemonTypes] = useState([]);

    const [pokemonId, setPokemonId] = useState(Number);
    const [pokemonFromId, setPokemonFromId] = useState({});
    const [imgUrlFromId, setImgUrlFromId] = useState();

    const [pokemonType, setPokemonType] = useState(String);
    const [pokemonsFromType, setPokemonsFromType] = useState([])

    
    //Pokemon types
    useEffect(() => {
        setPokemonId(1);
        setPokemonType("Fire");

        axios.get("http://localhost:8000/task3/pokemon/types")
        .then((response) => {
            setPokemonTypes(response.data);
        })
        .catch((error) => {
            console.error(":c", error);
        })
    }, [pokemonType]);

    //Pokemon from id
    useEffect(() => {
        //info
        axios.get(`http://localhost:8000/task3/pokemon/${pokemonId}`)
        .then((response) => {
            setPokemonFromId(response.data);
        })
        .catch((error) => {
            console.error(":c", error);
        })

        //img
        axios.get(`http://localhost:8000/task3/pokemon/image/3`)
        .then((response) => {
            setImgUrlFromId(response.data);
        })
        .catch((error) => {
            console.error(":c", error);
        })
    }, [pokemonId]);

    //Pokemons from type
    useEffect(() => {
        axios.get(`http://localhost:8000/task3/pokemon/type/${pokemonType}`)
        .then((response) => {
            if (typeof(response.data) !== "string")
                setPokemonsFromType(response.data);
        })
        .catch((error) => {
            console.error(":c", error);
        })
    }, [pokemonType]);

    return (
        <div>
            {/* pokemon types */}
            <div>
                {
                    pokemonTypes.map((e, index) => {
                        return (
                            e.english
                        )
                    })
                }
            </div>

            {/* from type */}
            <div>
                {
                    pokemonsFromType.map((e, index) => {
                        return (
                            e.name.english
                        )
                    })
                }
            </div>

            {/* from id */}
            <div>
                {
                    pokemonFromId?.name?.english
                }
                {
                    imgUrlFromId ? ( <img src={`data:image/png;base64, ${imgUrlFromId}`} alt='oopsie'/> ) : null
                }
            </div>
        </div>
    );
}

export default Task3;