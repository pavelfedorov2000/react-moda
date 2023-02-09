import classNames from 'classnames';
import React from 'react';
import search from '../assets/images/icons/search.svg';

const SearchForm = ({ visibleSearch }) => {
    return (
        <form action="#" className="search-form header__search">
            <input className={classNames('search-form__input', {
                'active': visibleSearch
            })} placeholder="Введите фразу для поиска, например, платье" style={{ backgroundImage: `url(${search})` }} />
        </form>
    );
}

export default SearchForm;