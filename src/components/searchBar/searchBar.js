import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from './searchBarActions';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const [inputValue, setInputValue] = useState(searchTerm);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        setSearchTerm(inputValue);
    }

    return (
        <div className='search-bar'>
            <input
                type='text'
                placeholder='Search...'
                value={inputValue}
                onChange={handleInputChange}
                name='q'
            />
            <button onClick={handleSearch}><img src={require('')}></img></button>
        </div>
    );
};

const mapStateToProps = state => ({
    searchTerm: state.searchBar.searchTerm,
});

const mapDispatchToProps = {
    setSearchTerm,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
