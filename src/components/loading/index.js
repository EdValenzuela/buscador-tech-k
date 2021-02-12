import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingData = () => {
    return (
        <div className="flex flex-wrap items-center justify-around w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 bg-yellow-500 mt-10 m-auto p-4 rounded-lg cursor-wait">
            <ClipLoader size={50} color="white" />
            <p className="text-white text-3xl">Loading ... </p>
        </div>
    )
}

export default LoadingData