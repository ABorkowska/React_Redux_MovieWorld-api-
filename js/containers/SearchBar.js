import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import {searchMovies} from "../redux/actions";

const mapDispatchToProps = (dispatch) => ({
    onSearch: (entry) => dispatch(searchMovies(entry)),
})
export default connect(null, mapDispatchToProps)(SearchBar);