import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingData from "../loading";

const Detail = () => {
  const { id } = useParams();

  const KEY = "3f2b5781";

  const [showsData, setShowsData] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    try {
      const getShows = async () => {
        const url = `https://www.omdbapi.com/?apikey=${KEY}&r=json&i=${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        setShowsData(data);
        setFetching(false);
      };
      getShows();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  //Titulo, anio, genero, lenguaje, actores, pais
  const { Title, Year, Genre, Actors, Country, Poster } = showsData;
  return (
      <>
      {
          fetching ? (
            <LoadingData />
          ):(
            <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap border-2 border-blue-100 p-2">
                <img
                  alt="Poster"
                  className="lg:w-1/4 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src={Poster}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {Year}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {Title}
                  </h1>
                  <div className="bg-blue-100 p-4 my-5">
                    <p className="leading-relaxed">{Genre}</p>
                    <p className="leading-relaxed">{Actors}</p>
                    <p className="leading-relaxed">{Country}</p>
                  </div>
                  <Link
                    to={`/movies`}
                    title="Volver"
                    className="flex justify-center uppercase ml-auto text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                    Volver
                  </Link>
                </div>
              </div>
            </div>
          </section>
          )
      }
      </>
    
  );
};

export default Detail;
