import {getDetails, search} from "../api";

export const ADD_TO_WATCHED = "add to watched"
export const REMOVE_FROM_WATCHED = "remove from watched"
export const ADD_TO_WISHLIST = "add to wishlist"
export const REMOVE_FROM_WISHLIST = "remove from wishlist"
export const ADD_RATING = "add rating"
export const CHANGE_RATING = "change rating"

export const LOAD_MOVIES = "load movies"
export const LOADED = "movies loaded"
export const FAILED = "movies failed"

export const FETCH_SINGLE = "load single movie"
export const SINGLE_OK = "single movie loaded"
export const SINGLE_ERROR = "single movie failed"

//-----------------HANDLING MOVIES---------------------
export const addToWatched = (movie) => ({
    type: ADD_TO_WATCHED,
    movie
})
export const removeFromWatched = (movie) => ({
    type: REMOVE_FROM_WATCHED,
    movie
})
export const addToWishList = (movie) => ({
    type: ADD_TO_WISHLIST,
    movie
})
export const removeFromWishList = (movie) => ({
    type: REMOVE_FROM_WISHLIST,
    movie
})

export const addRating = (movie) => ({
    type: ADD_RATING,
    movie
})

export const changeRating = (movie) => ({
    type: CHANGE_RATING,
    movie
})

//---------------FETCHING FROM API------------------
//search all movies
export const loadMovies = (payload) => ({
    type: LOAD_MOVIES,
    payload
})
export const moviesLoaded = (payload) => ({
    type: LOADED,
    payload
})
export const moviesFailed = (error) => ({
    type: FAILED,
    error
})
// show single movie details
export const fetchSingle = (movie) => ({
    type: FETCH_SINGLE,
    movie
})
export const singleLoaded = (payload) => ({
    type: SINGLE_OK,
    payload
})
export const singleFailed = (error) => ({
    type: SINGLE_ERROR,
    error
})

//------------------FETCHING with THUNK-------------------------
export const searchMovies = (entry) => (dispatch) => {      //all movies
    dispatch(loadMovies());
    search(entry)
    .then(res => res.json())
    .then(data => {
        if (data.Error) {
            throw(data.Error);
        } else {
            console.log("Filmy: ", data)
            dispatch(moviesLoaded(data))
            console.log("Movies:", data)
        }
    }).catch(err => dispatch(moviesFailed(err)))
}
export const getMovie = (id) => (dispatch) => {         //single movie
    dispatch(fetchSingle());
    getDetails(id)
    .then(res => res.json())
    .then(data => {
        if (data.Error) {
            throw(data.Error);
        } else {
            dispatch(singleLoaded())
        }
    }).catch(err => dispatch(singleFailed(err)))
}