import React, {useState} from "react";

const Filter = ({filter, setFilter}) => {
    const [entry, setEntry] = useState('')
    return (
        <form className='filterForm'>

            <input type='text' value={entry} placeholder='Search...' onChange={e => {
                setEntry(e.target.value);
                setFilter({name: 'entry', value: e.target.value})
            }}/>

            <select id='type' value={filter} onChange={(e) => setFilter({name: e.target.value})}>
                <option value={undefined}>Category</option>
                <option value={'movies'}>Movies</option>
                <option value={'series'}>Series</option>
                <option value={'episode'}>Episodes</option>
            </select>

            <select id='filter' value={filter} onChange={(e) => setFilter({name: e.target.value})}>
                <option value={undefined}>Sort</option>
                <option value={'a-z'}>A-Z</option>
                <option value={'rating_desc'}>Rating Descending</option>
                <option value={'rating_asc'}>Rating Ascending</option>
                <option value={'year_desc'}>Year Descending</option>
                <option value={'year_asc'}>Year Ascending</option>
            </select>

        </form>
    )
}
export default Filter;