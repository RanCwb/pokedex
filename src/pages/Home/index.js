
import { useEffect,useState } from "react";
import "./styles.css"
import axios from "axios";

export default function Home() {

    const [poke,setPoke] = useState([])

    useEffect(() =>{
        getPoke();
    },[])

    const getPoke = () =>{
        
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then((res)=>{
          setPoke(res.data.results)
            console.log(res)
        })
        .catch((err) =>{
        console.log(err)
        })
    }

    return (
        <div className="box">
       {poke && poke.length > 0 ? (
        poke.map((pokemon) => (
          <li key={pokemon.id}>
            <div className="card">
                <strong className="title">{pokemon.name}</strong>
                <img
              className="img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`}
              alt={pokemon.name}
            />
            <p>{pokemon.weigth}</p>
            </div>
          </li>
        ))
      ) : (
        <p>Ainda não há dados de Pokémon carregados.</p>
      )}
      </div>
    );
 
}
