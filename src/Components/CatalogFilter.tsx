import classNames from 'classnames';
import { useRef, useEffect, useState } from 'react';
import checkIcon from '../assets/images/icons/check.svg';

interface Props {
    name: string;
    toggleTitle: string;
    title?: string;
    items: any[];
    onSelect: (items: string[]) => void;
    onReset: () => void;
}

const CatalogFilter = ({ name, toggleTitle, title, items, onSelect, onReset }: Props) => {
    //const filterRef = useRef();

    const [visibleFilter, setVisibleFilter] = useState(false);

    const toggleFilter = () => {
        setVisibleFilter((prevState) => !prevState);
    }

    const handleReset = () => {
        //onReset([]);
    }

    const [checkedItems, setCheckedItems] = useState(items.map((item) => item.text));

    const onCheckItem = (text: string) => {
        setCheckedItems(checkedItems.filter((item) => item.text === text));
    }

    /* const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(filterRef.current)) {
            setVisibleFilter(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []); */

    return (
        <fieldset className={`catalog-filters__item catalog-filter catalog-filters__item--${name}`}>
            <legend onClick={toggleFilter} className="catalog-filters__item-title" style={{ fontWeight: `${items.length > 0 ? '600' : '400'}` }}>
                <span>{toggleTitle}</span>
                {items.length > 0 &&
                    <span className="filter-output">({checkedItems.length})</span>
                }
                <svg onClick={toggleFilter} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
                </svg>
            </legend>

            {visibleFilter &&
                <div className="catalog-filters__item-drop catalog-drop-filter">
                    <div className="catalog-drop-filter__inner">
                        <div className="catalog-drop-filter__body">
                            <div className="catalog-drop-filter__title">{title ?? `Выберите ${toggleTitle}`}</div>
                            <div className="catalog-drop-filter__items">
                                {items.map((item) => (
                                    <label key={item.text.toString()} className="catalog-drop-filter__item">
                                        <input onChange={() => onCheckItem(item.text)} className="check-box" type="checkbox" checked={checkedItems.includes(item.text) ? true : false} />
                                        <span className="check-style">
                                            <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                                        </span>
                                        {item.bg &&
                                            <span style={{ background: `linear-gradient(${item.bg})` }} className={classNames('check-color', {
                                            'check-color--white': item.bg === '#fff'
                                        })}></span>
                                        }
                                        <span className="check-text">{item.text}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="catalog-drop-filter__buttons">
                        <button onClick={() => onReset()} className="btn catalog-drop-filter__btn btn--border" type="reset">
                            <span>Очистить все</span>
                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z"
                                    fill="#479458" />
                            </svg>
                        </button>
                        <button onClick={() => onSelect(checkedItems)} className="btn catalog-drop-filter__btn" type="button">Применить</button>
                    </div>
                </div>
            }
        </fieldset>
    );
};

export default CatalogFilter;