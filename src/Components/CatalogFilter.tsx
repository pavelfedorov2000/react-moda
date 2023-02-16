import classNames from 'classnames';
import { useRef, useState } from 'react';
import { Filter } from '../enums/Filter';
import useHandleOutsideClick from '../hooks/useHandleOutsideClick';
import { useTypedSelector } from '../hooks/useTypedSelector';
import CatalogDropFilterItem from './CatalogDropFilterItem';
import CatalogDropSort from './CatalogDropSort';
import PriceRange from './PriceRange';

interface Props {
    name: string;
    toggleTitle: string;
    title?: string;
    items?: any[];
    onSelect?: (items: any[]) => void;
    onReset?: () => void;
}

const CatalogFilter = ({ name, toggleTitle, title, items, onSelect, onReset }: Props) => {
    const filterRef = useRef<HTMLFieldSetElement>(null);
    const { sortBy } = useTypedSelector((state) => state.filtersReducer);
    
    const [visibleFilter, setVisibleFilter] = useState(false);

    const toggleFilter = () => {
        setVisibleFilter((prevState) => !prevState);
    }

    const [checkedItems, setCheckedItems] = useState<any[]>([]);

    const [priceFrom, setPriceFrom] = useState<string>('');
    const [priceTo, setPriceTo] = useState<string>('');

    const onChangeFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceFrom(event.target.value);
        setCheckedItems([+priceFrom, +priceTo]);
    }
    const onChangeTo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const priceToArr = priceTo.split('');
        setPriceTo(event.target.value);
        setCheckedItems([+priceFrom, +`${priceTo}${priceToArr[priceToArr.length - 1]}`]);
    }

    const handleReset = () => {
        setCheckedItems([]);
        setPriceFrom('');
        setPriceTo('');
        onReset && onReset();
    }

    useHandleOutsideClick(filterRef, setVisibleFilter);

    /* const handleOutsideClick = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        
        if (!path.includes(filterRef.current)) {
            setVisibleFilter(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []); */

    return (
        <fieldset ref={filterRef} className={`catalog-filters__item catalog-filter catalog-filters__item--${name}`} id={`${name}_filter_heading`}>
            <legend className="catalog-filter__title">
                <button onClick={toggleFilter} className="catalog-filter__toggle" type="button" aria-controls={`${name}_filter_dropdown`} aria-expanded={visibleFilter} style={{ fontWeight: `${checkedItems.length > 0 ? '600' : '400'}` }}>
                    <span>{toggleTitle ?? sortBy.name}</span>
                    {checkedItems.length > 0 && name !== Filter.Sort &&
                        (
                            name === Filter.Price ?
                            <>
                                <span className="filter-output">({priceFrom}-</span>
                                <span className="filter-output">{priceTo})</span>
                            </>
                            :
                            <span className="filter-output">({checkedItems.length})</span>
                        )
                    }
                    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" />
                    </svg>
                </button>
            </legend>

            <div className={classNames('catalog-filter__drop catalog-drop-filter', {
                'active': visibleFilter
            })} id={`${name}_filter_dropdown`} aria-labelledby={`${name}_filter_heading`}>
                <div className="catalog-drop-filter__inner">
                    {name === Filter.Price ?
                        <PriceRange from={priceFrom} to={priceTo} onChangeFrom={onChangeFrom} onChangeTo={onChangeTo} />
                        : name === Filter.Sort ?
                        <div className="catalog-drop-filter__items">
                            {items?.map((item, i) => (
                                <CatalogDropSort index={i} {...item} />
                            ))}
                        </div>
                        : <div className="catalog-drop-filter__body">
                            <div className="catalog-drop-filter__title">{title ?? `Выберите ${toggleTitle}`}</div>
                            <div className="catalog-drop-filter__items">
                                {items?.map((item) => (
                                    <CatalogDropFilterItem checkedItems={checkedItems} setCheckedItems={setCheckedItems} items={items} item={item} />
                                ))}
                            </div>
                        </div>
                    }
                </div>
                {name !== Filter.Sort &&
                    <div className="catalog-drop-filter__buttons">
                        <button onClick={handleReset} className="btn catalog-drop-filter__btn btn--border" type="reset">
                            <span>Очистить все</span>
                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z" />
                            </svg>
                        </button>
                        <button onClick={() => onSelect && onSelect(checkedItems)} className="btn catalog-drop-filter__btn" type="button">Применить</button>
                    </div>
                }
            </div>
        </fieldset>
    );
};

export default CatalogFilter;