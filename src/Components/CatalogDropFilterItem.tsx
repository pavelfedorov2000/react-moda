import classNames from "classnames";
import { useState } from "react";
import checkIcon from '../assets/images/icons/check.svg';

interface Props {
    item: any;
    items: any[];
    checkedItems: any[];
    setCheckedItems: (items: any[]) => void;
}

const CatalogDropFilterItem = ({ item, items, checkedItems, setCheckedItems }: Props) => {
    const [checked, setChecked] = useState(checkedItems.includes(item.text ?? item));

    const onCheckItem = (text: string) => {
        setCheckedItems(
            !checked ?
                [
                    ...checkedItems,
                    ...items.filter((item) => item.text === text || item === text).map((item) => item.text ?? item)
                ]
                : checkedItems.filter((item) => item !== text)
        );
        setChecked((checked) => !checked);
    }

    return (
        <label key={item.text ? item.text.toString() : item} className="catalog-drop-filter__item">
            <input onChange={() => onCheckItem(item.text ?? item)} className="checkbox__input" type="checkbox" checked={checked && checkedItems.length !== 0} />
            <span className="checkbox__style">
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            {item.bg &&
                <span style={{ background: `linear-gradient(${item.bg})` }} className={classNames('checkbox__color', {
                'checkbox__color--white': item.bg === '#fff'
            })}></span>
            }
            <span className="checkbox__text">{item.text ?? item}</span>
        </label>
    );
};

export default CatalogDropFilterItem;