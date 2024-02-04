import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, getPagePagination } from '../../Redux/Actions/moviesActions';

const ViewHomeHook = () => {
    const dispatch = useDispatch()
    const [pageCount, setPageCont] = useState(0)
    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch]);
    const state = useSelector(state => state.movies)
    const page = useSelector(state => state.pageCount)
    const loading = useSelector(state => state.loading)

    useEffect(() => {
        setPageCont(page)
    }, [page]);

    const handelPage = async (page) => {
        await dispatch(getPagePagination(page))
    }
    return [state, pageCount, loading, handelPage]
}

export default ViewHomeHook