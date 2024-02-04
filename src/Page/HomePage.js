import React from 'react'
import { Row } from 'react-bootstrap'
import Pagination from '../Component/Pagination/Pagination'
import MoviesContainer from '../Component/Movies/MoviesContainer'
import ViewHomeHook from '../Component/Hook/ViewHomeHook'

const HomePage = () => {
    const [state, pageCount, loading, handelPage] = ViewHomeHook()

    return (
        <div className='homePage p-1 p-md-2  '>
            <MoviesContainer movies={state} loading={loading} />
            <Row className='m-0 py-3'>
                {pageCount > 0 && <Pagination pageCount={pageCount} handelPage={handelPage} />}
            </Row>
        </div>
    )
}

export default HomePage