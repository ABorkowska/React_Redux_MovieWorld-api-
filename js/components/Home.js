import React from 'react';
import Movies from "../containers/Movies";
import SearchBar from "../containers/SearchBar";
import Navigation from "./Layout/Navigation";

export default function Home(){
    return(
        <>
            <Navigation />
            <SearchBar />
            <Movies />
        </>
    )
}