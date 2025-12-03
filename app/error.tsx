'use client'
import React from 'react'
interface Props {
    error: Error;
    reset: () => void;
}
const ErrorPage = ({ error, reset }: Props) => {
    console.log(error);

    return (
        <>
            <div>An unexpected error has occurred.</div>
            <button className="btn bg-fuchsia-600 mt-4" onClick={() => reset()}>reset</button>
        </>
    )
}

export default ErrorPage