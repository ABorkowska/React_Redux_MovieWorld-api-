import {
    ADD_RATING,
    ADD_TO_WATCHED,
    ADD_TO_WISHLIST, FAILED, FETCH_SINGLE,
    LOAD_MOVIES, LOADED,
    REMOVE_FROM_WATCHED,
    REMOVE_FROM_WISHLIST, SINGLE_ERROR, SINGLE_OK} from "./actions";
import {combineReducers} from "redux";

const searchResults = {
    loading: false,
    error: "",
    movies: null
}
const singleFetchResults = {
    loading: false,
    error: "",
    movie: null
}

const watchedListReducer = (state = [], action) => {
    switch (action.type) {

        case ADD_TO_WATCHED:
            return [...state, action.movie];

        case REMOVE_FROM_WATCHED:
            return state.filter(item =>
                item.imdbID !== action.movie.imdbID);  //id --> imdbID

        case ADD_RATING:
            return [...state.filter(item =>
                item.imdbID !== action.movie.imdbID), action.movie]

        default:
            return state
    }
}
const wishListReducer = (state = [], action) => {
    switch (action.type) {

        case ADD_TO_WISHLIST:
            return [...state, action.movie];

        case REMOVE_FROM_WISHLIST:
            return state.filter(item =>
                item.imdbID !== action.movie.imdbID);  //id --> imdbID

        default:
            return state
    }
}
const searchReducer = (state = searchResults, action) => {
    switch (action.type) {

        case LOAD_MOVIES:
            return {...state, loading: true}

        case LOADED:
            return {loading: false, error: "", movies: action.payload}

        case FAILED:
            return {loading: false, error: action.error, movies: null}

        default: return state;
    }
}
const singleReducer = (state = singleFetchResults, action) => {
    switch (action.type) {

        case FETCH_SINGLE:
            return {...state, loading: true}

        case SINGLE_OK:
            return {loading: false, error: "", movie: action.payload}

        case SINGLE_ERROR:
            return {loading: false, error: action.error, movie: null}

        default: return state;
    }
}
export default combineReducers({
    watched: watchedListReducer,
    wishList: wishListReducer,
    search: searchReducer,
    movie: singleReducer
})