import React, {Fragment} from 'react';
import Button from './Button';
const Search = () => {
    return (

    
    <Fragment>
        <div className="searchContainer">
        <input name="search" type="text" className="searchInput" id="searchInput" placeholder="Search A note"/>
        <Button id="searchButton" icon="search" className="searchButton" value="Search"/>
        </div>

    </Fragment>
    )
}

export default Search;