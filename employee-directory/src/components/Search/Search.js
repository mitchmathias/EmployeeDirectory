import React from 'react';
import './style.css'

function Search(props) {
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid justify-content-center">
          <form className="d-flex form">
          <label htmlFor="search"></label>
            <input className="form-control me-2" type="text" id="search" name="search" placeholder="Search Employees" aria-label="Search" value={props.search} onChange={props.handleInputChange} onKeyPress= {props.keyPress} />
          </form>
        </div>
      </nav>
    )
}
export default Search