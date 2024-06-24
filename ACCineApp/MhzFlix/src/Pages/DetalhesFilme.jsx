import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetalhesFilme() {
    console.log(useParams)
    const {id} = useParams()
    const [filme, setFilme] = useState({})

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(error => console.log(error))
    },[])
    return (
        <>
            <h1 className="flex justify-center text-2xl text-black font-Montserrat mt-5 mb-10">Detalhes do Filme: {filme.title}</h1>
            <div className="flex flex-row ml-36 m-4 border rounded-lg w-[1500px]">
                <img className="m-4 w-80 rounded-lg border" src={`https://image.tmdb.org/t/p/w1280/${filme.poster_path}`}/>
                <div className="flex flex-col m-3 font-Montserrat">
                    <p className="text-black text-3xl mb-5">{filme.title}</p>
                    <p className="text-black text-lg mb-5 w-[950px]">{filme.overview}</p>
                    <p className="text-black mb-4">Nota do Metacritic {filme.vote_average}</p>
                    <p className="text-black">O filme será lançado nessa data: {filme.release_date}</p>
                </div>
            </div>
            <div className="bg-gray-500 h-[93px]"></div>
        </> 
    )
}

export default DetalhesFilme