import React from 'react';
import { connect } from 'react-redux';
import { setFilterCategory } from './filterOptionsActions';

const categories =['All', 'News', 'Technology', 'Gaming', 'Travel'];

const FilterOptions = ({ filterCategory, setFilterCategory }) => {
    const handleCategoryChange = (category) => {
        setFilterCategory(category);
    };

    return (
        <div className='filter-options'>
            <p>Filter by category:</p>
            <ul>
                {categories.map((category) => (
                    <li
                        key={category}
                        className={category === filterCategory ? 'active' : ''}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    filterCategory: state.filterOptions.filterCategory,
});

const mapDispatchToProps = {
    setFilterCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterOptions);