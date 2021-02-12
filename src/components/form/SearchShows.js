import React, { useState } from 'react';
import ErrorInput from './ErrorInput';

const SearchShows = ({nameSearch, setNameSearch, setDisponible}) => {

    const [error, setError] = useState(false);
    const {params} = nameSearch;

    const handleSubmit = e =>{
        e.preventDefault();
        if(!params){
            setError(true);
            return;
        }
        setDisponible(true);
        setError(false); //Reinicio mi bandera  
    }

    const handleInputChange = e => {
        setNameSearch({
            ...nameSearch,
            [e.target.name] : e.target.value
        });
    }

    return (
        <div className="flex justify-center mt-10">
                <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-3xl">
                    <input 
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
                        type="text" 
                        placeholder="Enter a name of tv shows"
                        name="params"
                        value={params}
                        onChange={ handleInputChange }
                    />
                    {error && (
                        <ErrorInput
                            messageInfo="campo buscar vacio !!!"
                        />
                    )}
                </form>
        </div>
    )
}

export default SearchShows