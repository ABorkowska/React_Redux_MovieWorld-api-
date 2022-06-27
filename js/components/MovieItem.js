import React, {useState} from "react";
import {Link} from "react-router-dom";
import Rating from "../containers/Rating";

//shows single json object
//img under a Poster key in API
export const MovieItem = (props) => {//props from Movies, key names from API object
    const {Poster, imdbID} = props;
    console.log(imdbID, Poster)

    return (
        <div className="singleResult">
            <Link to={`/${imdbID}`}><img src={Poster} alt="Image"/></Link>
            <Rating {...props}/>
        </div>
    )
}
export default MovieItem;