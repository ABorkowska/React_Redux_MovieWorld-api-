import {connect} from "react-redux";
import Movies from "../components/Movies";
import {addToWatched, addToWishList} from "../redux/actions";               //thunks from actions

const mapStateToProps = ({search, watched, wishList, single}) => {//reducers
    console.log("In Container: ", search.movies)
    return {
        movies: search.movies,
        error: search.error,
        watched: watched,
        wishList: wishList,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToWishList: (movie) => dispatch(addToWishList(movie)),
        addToWatched: (movie) => dispatch(addToWatched(movie))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies)