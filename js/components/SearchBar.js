import React, { useState } from "react";

const SearchBar = ({onSearch}) => {
    const [param, setParam] = useState("");
    return (
        <form className='searchBar' onSubmit = {e => {
            e.preventDefault();
            onSearch(param);
        }}>
            <input type='search' className='search' value={param} onChange={e => setParam(e.target.value)}/>
            <input type='submit' className='submit' value='Search'/>
        </form>
    )
}
export default SearchBar;