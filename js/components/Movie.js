import React, {useEffect} from "react";
import Navigation from "./Layout/Navigation";
import Rating from "../containers/Rating";

const Movie = ({movie, onFetch}) => {
    useEffect(() => {
        onFetch()                   //() => dispatch(getMovie(ownProps.match.params.imdbID))
    }, [])
    return (
        <>
            <Navigation/>
            {movie.movie &&
            <div className="detailsContainer">
                <div className="detailsPicture">
                    <h2> {movie.movie.Title} </h2>
                    <img src={movie.movie.Poster} alt="image"/>
                    <Rating imdbID={movie.movie.imdbID} Poster={movie.movie.Poster}/>
                </div>
                <div className="detailsRight">
                    <p> Genre: {movie.movie.Genre}</p>
                    <p> Year: {movie.movie.Year}</p>
                    <p> Description: {movie.movie.Plot}</p>
                </div>
            </div>}
        </>
    )
}
export default Movie;