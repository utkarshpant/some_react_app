import React from 'react';

const SearchBox = () => {
    return (
        <div className="pa2">
            <input
                type="search"
                className="pa3 ba b--green bg-lightest-blue"
                placeholder="Search for someone."
            />
        </div>
    )
}

export default SearchBox;