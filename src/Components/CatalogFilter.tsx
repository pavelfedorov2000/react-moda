import classNames from 'classnames';
import { useRef, useState } from 'react';
import { Filter } from '../enums/Filter';
import useHandleOutsideClick from '../hooks/useHandleOutsideClick';
import { useTypedSelector } from '../hooks/useTypedSelector';
import CatalogDropFilterItem from './CatalogDropFilterItem';
import CatalogDropSort from './CatalogDropSort';
import PriceRange from './PriceRange';
import { ClassName } from '../enums/ClassName';
import Button from '../ui/Button';
import { FontWeight } from '../enums/FontWeight';
import { useIsOpenState } from '../hooks/useIsOpenState';

interface Props {
    name: string;
    toggleTitle: string;
    title?: string;
    items?: any[];
    onSelect?: (items: any[]) => void;
    onReset?: () => void;
}

const mainClass = 'catalog-filter';
const dropClass = 'catalog-drop-filter';

const CatalogFilter = ({ name, toggleTitle, title, items, onSelect, onReset }: Props) => {
    const filterRef = useRef<HTMLFieldSetElement>(null);
    const { sortBy } = useTypedSelector((state) => state.filtersReducer);

    const [isOpen, isOpenTrigger, setIsOpen] = useIsOpenState();

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

    useHandleOutsideClick(filterRef, setIsOpen);

    const catalogFilterTitleFontWeight = checkedItems.length > 0 ? FontWeight.Semibold : FontWeight.Normal;

    return (
        <fieldset ref={filterRef} className={classNames(`catalog-filters__item ${mainClass} catalog-filters__item--${name}`)}>
            <legend className={`${mainClass}__title`}>
                <button onClick={isOpenTrigger} className={`${mainClass}__toggle`} type="button" id={`${name}_filter_heading`} aria-controls={`${name}_filter_dropdown`} aria-expanded={isOpen} style={{ fontWeight: catalogFilterTitleFontWeight }}>
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

            <div className={classNames(`${mainClass}__drop ${dropClass}`, {
                [ClassName.Active]: isOpen
            })} id={`${name}_filter_dropdown`} aria-labelledby={`${name}_filter_heading`}>
                <div className={`${dropClass}__inner`}>
                    {name === Filter.Price ?
                        <PriceRange className={dropClass} from={priceFrom} to={priceTo} onChangeFrom={onChangeFrom} onChangeTo={onChangeTo} />
                        : name === Filter.Sort ?
                            <div className={`${dropClass}__items`}>
                                {items?.map((item, i) => (
                                    <CatalogDropSort index={i} {...item} />
                                ))}
                            </div>
                            : <div className={`${dropClass}__body`}>
                                <div className={`${dropClass}__title`}>
                                    {title ?? `Выберите ${toggleTitle}`}
                                </div>
                                <div className={`${dropClass}__items`}>
                                    {items?.map((item) => (
                                        <CatalogDropFilterItem checkedItems={checkedItems} setCheckedItems={setCheckedItems} items={items} item={item} />
                                    ))}
                                </div>
                            </div>
                    }
                </div>
                {name !== Filter.Sort &&
                    <div className={`${dropClass}__buttons`}>
                        <button onClick={handleReset} className="button catalog-drop-filter__btn button--border" type="reset">
                            <span>Очистить все</span>
                            <svg className={ClassName.Icon} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z" />
                            </svg>
                        </button>
                        <Button className={`${dropClass}__btn`} onClick={() => onSelect && onSelect(checkedItems)} text="Применить" />
                    </div>
                }
            </div>
        </fieldset>
    );
};

export default CatalogFilter;