import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MoviesDetailsImg from './MoviesDetailsImg'
import MoviesDetailsText from './MoviesDetailsText'

const DetailsContainer = ({ moveDetailis }) => {
    return (
        <Row className='d-flex justify-content-between g-3 py-4 shadow '>
            <Col xs={12} md={4} className='  p-0' >
                <MoviesDetailsImg moveDetailis={moveDetailis} />
            </Col>
            <Col xs={12} md={7} className=''>
                <MoviesDetailsText moveDetailis={moveDetailis} />
            </Col>
        </Row>
    )
}

export default DetailsContainer