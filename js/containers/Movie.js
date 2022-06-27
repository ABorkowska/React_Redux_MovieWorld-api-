import {getMovie} from "../redux/actions";
import {connect} from "react-redux";
import Movie from "../components/Movie";

const mapStateToProps = (state) => {
    return {
        movie: state.movie
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFetch: () => dispatch(getMovie(ownProps.match.params.imdbID))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movie)