import { GET_ALL_MOVIES, GET_ERROR, GET_ONE_MOVIES } from "../Types"

const initial = { movies: [], oneMovie: [], loading: true, pageCount: 0 }
export const moviesReduer = (state = initial, action) => {
    switch (action.type) {
        case GET_ALL_MOVIES:
            return {
                ...state,
                movies: action.payload,
                pageCount: action.page,
                loading: false,
            }
        case GET_ONE_MOVIES:
            return {
                oneMovie: action.payload,
                pageCount: action.page,
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                movies: action.payload,
            }
        default:
            return state;
    }

}