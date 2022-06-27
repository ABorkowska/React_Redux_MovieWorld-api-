import React, {useState} from "react";
import Navigation from "./Layout/Navigation";
import MovieItem from "./MovieItem";

const WishList = ({wishList}) => {
    return (
        <>
            <Navigation activeLink={"wishlist"}/>
            <ul className="searchResults">
                {wishList.map((item, key) =>
                    <MovieItem key={key} Poster={item.Poster} imdbID={item.imdbID}/>)}
            </ul>
        </>
    )
}
export default WishList;