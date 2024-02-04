import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Pagination from '../Component/Pagination/Pagination'

import DetailsContainer from '../Component/Movies/DetailsContainer'
import MoviesContainer from '../Component/Movies/MoviesContainer'

import ViewDetailsHook from '../Component/Hook/ViewDetailsHook'
import { useParams } from 'react-router-dom'
import ViewHomeHook from '../Component/Hook/ViewHomeHook'

const DetailsPage = () => {
    const { id } = useParams()
    const [moveDetailis, movies] = ViewDetailsHook(id)
    const [state, pageCount, loading, handelPage] = ViewHomeHook()
    return (
        <Container className=' '>
            <DetailsContainer moveDetailis={moveDetailis} />
            <div className='text-center my-5 mx-0'>
                <h3 className='title my-1'>more Movies</h3>
                <hr className='hr' />
            </div>
            <MoviesContainer movies={movies} />
            <Row className='m-0 py-3'>
                {pageCount > 0 && <Pagination pageCount={pageCount} handelPage={handelPage} />}
            </Row>
        </Container >
    )
}

export default DetailsPage