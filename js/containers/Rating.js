import {addRating, addToWatched, addToWishList, changeRating, removeFromWishList} from "../redux/actions";
import Rating from "../components/Rating";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        element: {...ownProps},
        rated: Boolean(state.watched.find(element => element.imdbID === ownProps.imdbID)),
        rating: Boolean(state.watched.find(element => element.imdbID === ownProps.imdbID) ?
            state.watched.find(element => element.imdbID === ownProps.imdbID).rating :
            null),
        onList: !!state.watched.find(element => element.imdbID === ownProps.imdbID)     // !! => expr. ? true : false
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addRating: (rating) => dispatch(addRating({...ownProps, rating})),
        changeRating: (rating) => dispatch(changeRating({...ownProps, rating})),
        onCheck: (movie, state) => state ? dispatch(removeFromWishList(movie)): dispatch(addToWishList)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rating)