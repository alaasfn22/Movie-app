import React from 'react'
const MoviesDetailsImg = ({ moveDetailis }) => {

    return (

        <div className='imgDetails_box text-center'>
            <img src={`https://image.tmdb.org/t/p/w500/` + moveDetailis.poster_path} alt='' className=' object-fit-cover ' />
        </div>

    )
}

export default MoviesDetailsImg