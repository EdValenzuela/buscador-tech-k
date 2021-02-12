import React, { useState } from 'react';
import OmbContext from './OmbContext';
import useFetch from '../hooks/useFetch';

const OmbState = ({children}) => {

    const CODE_KEY = '3f2b5781';
    const [nameSearch, setNameSearch] = useState({
        params : ''
    });
    const {params} = nameSearch;
    const [ data, loading, setDisponible ] = useFetch(`https://www.omdbapi.com/?s=${params}&apikey=${CODE_KEY}`);
    return (
        <OmbContext.Provider
            value={{
                data, //resultado de la busqueda 
                loading, //hay data? true/false
                setDisponible, //flag
                nameSearch, //parametro del form
                setNameSearch
            }}
        >
            {children}
        </OmbContext.Provider>
    )
}

export default OmbState
