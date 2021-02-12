import React from "react";
import { Link } from "react-router-dom";

const CardShows = ({ item }) => {
  const { Title, Poster, imdbID } = item;

  return (
    <>
      <div className="p-4 md:w-1/3 w-full">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={Poster}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {Title}
            </h1>
            <div className="flex items-center flex-wrap ">
              <Link
                to={`/detail/${imdbID}`}
                title={`/detail/${imdbID}`}
                className="text-white bg-blue-500 rounded focus:outline-none hover:bg-red-600 inline-flex uppercase justify-center w-full items-center py-3 px-1 md:mb-2 lg:mb-0"
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardShows;
