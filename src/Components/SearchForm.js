import React from 'react';

function SearchForm(props) {
    return (
        <form action="#" className="search-form header__search">
            <input className="search-form__input" placeholder="Введите фразу для поиска, например, платье" />
            <div className="help-search search-form__help">
                <a href="#" className="help-search__item">
                    <span>жилетки</span> женские
                </a>
                <a href="#" className="help-search__item">
                    <span>жилетки</span>
                </a>
                <a href="#" className="help-search__item">
                    <span>жилетки</span> женские трикотажные
                </a>
                <a href="#" className="help-search__item">
                    <span>жилетки</span> мужские
                </a>
                <a href="#" className="help-search__item">
                    <span>жилетки</span> теплые
                </a>
                <a href="#" className="help-search__item">
                    жилетки детские
                </a>
                <a href="#" className="help-search__item">
                    жилетки nike
                </a>
            </div>
        </form>
    );
}

export default SearchForm;