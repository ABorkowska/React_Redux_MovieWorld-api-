import React, {useState} from "react";
import Navigation from "./Layout/Navigation";
import WatchedFilter from "./Filter/WatchedFilter";
import MovieItem from "./MovieItem";
import {filterList} from "../containers/Watched";

const Watched = ({watched}) => {
    const [filter, setFilter] = useState({name: undefined});
    return (
        <>
            <Navigation activeLink={"watched"}/>
            <WatchedFilter filter={filter.name} setFilter={(filter) => setFilter(filter)}/>
            <ul className="searchResults">
                {filterList(watched, filter).map((item, key) =>
                    <MovieItem key={key} Poster={item.Poster} imdbID={item.imdbID}/>)}
            </ul>
        </>
    )
}
export default Watched;