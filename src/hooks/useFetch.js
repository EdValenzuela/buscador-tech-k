import React, { useEffect, useState } from "react";

const useFetch = (url) => {
 let showLocal  = JSON.parse(localStorage.getItem("movies")) || [];

  const [data, setData] = useState(showLocal);
  const [disponible, setDisponible] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(data));
  }, [data]);

  const getData = async () => {
    try {
      if (disponible) {
        const resp = await fetch(url);
        const datas = await resp.json();
        setData(datas);
        setFetching(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [url, disponible]);

  return [data, fetching, setDisponible];
};

export default useFetch;
