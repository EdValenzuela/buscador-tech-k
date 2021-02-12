import React, { useContext } from 'react';

import OmbContext from '../../context/OmbContext';
import ErrorInput from '../form/ErrorInput';

//Components
import SearchShows from '../form/SearchShows';
import CardShows from './CardShows';

const Main = () => {

    const { data, 
        loading, 
        setDisponible,
        nameSearch,
        setNameSearch } = useContext(OmbContext);

    return (
        <>
            <SearchShows nameSearch={nameSearch} setNameSearch={setNameSearch} setDisponible={setDisponible} />
            <div className="flex justify-center w-full mt-10">
            {
                loading ? (
                    <ErrorInput messageColor="bg-red-500" messageInfo="Ingrese una serie a buscar" />
                ):
                (
                    <>
                     <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                {
                                    data.Search && data.Search.length >= 1 ? (data.Search.map(item => (
                                        <CardShows   
                                            key={item.imdbID}
                                            item={item}
                                        />
                                    ))):(<ErrorInput messageColor="bg-yellow-500" messageInfo="No hay información" />)
                                }
                            </div>
                        </div>
                     </section>
                    </>
                )
            }
            </div>
        </>
    )
}

export default Main
