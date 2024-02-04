import axios from "axios"
import { GET_ALL_MOVIES, GET_ERROR, GET_ONE_MOVIES } from "../Types"

export const getMovies = () => async (dispatch) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1f249f41341dae3b4fee38650bf11aaa`)
        dispatch({
            type: GET_ALL_MOVIES,
            payload: res.data.results,
            page: res.data.total_pages,
            loading: true,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        })
    }

}
export const getOneMovies = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1f249f41341dae3b4fee38650bf11aaa`)
        dispatch({
            type: GET_ONE_MOVIES,
            payload: res.data,
            page: res.data.total_pages,
            loading: true,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        })
    }

}
export const getPagePagination = (page) => async (dispatch) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1f249f41341dae3b4fee38650bf11aaa&page=${page}`)
        dispatch({
            type: GET_ALL_MOVIES,
            payload: res.data.results,
            page: res.data.total_pages,
            loading: true,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        })
    }

}
export const searchMoive = (word) => async (dispatch) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=1f249f41341dae3b4fee38650bf11aaa`)
        dispatch({
            type: GET_ALL_MOVIES,
            payload: res.data.results,
            page: res.data.total_pages,
            loading: true,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        })
    }

}
