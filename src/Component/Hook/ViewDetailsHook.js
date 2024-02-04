import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, getOneMovies } from '../../Redux/Actions/moviesActions';

const ViewDetailsHook = (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOneMovies(id))
        const wait = async () => {
            await dispatch(getMovies())
        }
        wait()
    }, [id]);



    const moveDetailis = useSelector(state => state.oneMovie)
    const movies = useSelector(state => state.movies)
    return [moveDetailis, movies]
}

export default ViewDetailsHook