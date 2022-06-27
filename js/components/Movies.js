import React from "react";
import MovieItem from "./MovieItem";

//shows SearchResults
const Movies = ({movies, error}) => {       // props from container
    return (
        <>
            <h3> Search Results </h3>
            <ul className="searchResults">
                {movies && movies.Search.map((movie) => <MovieItem key={movie.imdbID} {...movie}/>)}
                {error && <h3> {error} </h3>}
            </ul>
        </>
    )
}
export default Movies;