import React from 'react'
import { Row } from 'react-bootstrap'
import MoviesCard from './MoviesCard'

const MoviesContainer = ({ movies, loading }) => {
    return (
        <Row className='disply_row m-0 py-3 '>
            {
                loading ? (<div className="spinner-border  mx-auto" role="status">
                    <span className="visually-hidden mx-auto">Loading...</span>
                </div>) : (
                    movies ? (movies.map((item) => {
                        return (
                            <MoviesCard key={item.id} mov={item} />
                        )
                    })) : (null)
                )
            }
        </Row>
    )
}

export default MoviesContainer