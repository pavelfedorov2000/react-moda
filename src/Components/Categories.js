import React from 'react';
import PropTypes from 'prop-types';
//import { useState } from 'react';

const Categories = React.memo(function Categories({ items, onClickCategory, activeCategory }) {
    //const [activeCategory, setActiveCategory] = useState(null);
    return (
        <div className="categories">

        </div>
    );
});

// Типизация на минималках
/* Categories.propTypes = {
    //activeCategory: PropTypes.oneOf(PropTypes.number, null),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
    activeCategory: null,
    items: [],
}; */

export default Categories;