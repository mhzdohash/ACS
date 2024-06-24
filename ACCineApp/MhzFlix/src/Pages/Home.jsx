import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../artigos.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home(){
    console.log(data)
    const [filmes, setFilmes] = useState([])

    const settings = {
        Infinite:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        button: "bg-black"
    };

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    return (
        <>
        <h1 className="flex justify-center text-3xl text-black font-Montserrat mt-10 mb-10">Lançamentos</h1>
        <div className="flex flex-col w-[1780px] m-8 ml-[55px]">
            <Slider {...settings}>
                {filmes.map(filme => (
                    <div className="ml-[85px]" key={filme.id}>
                        <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w400/${filme.poster_path}`} alt={filme.title} />
                        <h1 className="text-black mr-[194px] rounded text-lg flex justify-start mt-1 mb-2">{filme.title}</h1>
                        <Link to={`/${filme.id}`} className="hover:bg-slate-700 hover:duration-200 bg-black text-white rounded-lg flex items-center mr-[190px] justify-center font-Montserrat font-bold p-1">
                            Detalhes do Filme
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
        <h1 className="flex justify-center text-3xl text-black font-Montserrat mt-10 mb-10">Descrições</h1>
        <div className="flex justify-center">
            <div className="flex flex-col w-[900px]">
                {
                    (data.map)(
                        (filme, index) =>(
                            <>
                            <div className="card bg-[#A6A6A6] mt-4 rounded-lg flex" key={index}>
                                <img className="w-48 flex rounded-3xl p-3" src={filme.image}/>
                                <div className="ml-5 mt-1">
                                    <h1 className="text-lg m-2 mb-3 text-black font-Montserrat">{filme.title}</h1>
                                    <p className="text-base ml-[13px] mr-[130px]">{filme.text}</p>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Home