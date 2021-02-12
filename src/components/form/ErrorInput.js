import React from 'react'

const ErrorInput = ({messageInfo, messageColor}) => {
    return (
        <p className={`w-auto block p-5 text-base text-center text-white ${messageColor} rounded-xl`}>{messageInfo}</p>
    )
}

export default ErrorInput
