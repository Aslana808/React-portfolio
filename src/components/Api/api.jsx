import React from 'react'
import './api.scss'
import useFetch from './useFetch'

const Api = () => {
    const randomComment = useFetch(Math.floor(Math.random()*100));
    return (
        <div>
        {randomComment ? (
            <div>
                <p className='paragraph'>Random Comment: <b>{randomComment?.body}</b></p>    
            </div>
        ) : (
            <p className='paragraph'>Fetching data...</p>
        )}   
        </div>
    )
}

export default Api
