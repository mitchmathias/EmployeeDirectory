import React from 'react';

function Search(props) {
    return (
        <form>
            <label htmlFor="search">Search</label>
            <input type="text" id="search" name="search" value={props.search} onChange={props.handleInputChange} onKeyPress= {props.keyPress}/>
        </form>
    )
}
export default Search