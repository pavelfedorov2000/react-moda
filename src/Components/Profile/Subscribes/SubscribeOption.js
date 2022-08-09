import React, { useContext } from 'react';
import checkIcon from '../../../assets/images/icons/check.svg';
import { SubscribeItemContext, SubscribesContext } from '../../../context';

function SubscribeOption({ option, i, checkedSubscribeSelect, onCheckSubscribeSelect }) {

    const { handleChangeSubscribe, obj } = useContext(SubscribesContext);
    const { item } = useContext(SubscribeItemContext);

    const selectHandler = () => {
        onCheckSubscribeSelect();

        obj.items[item] = !checkedSubscribeSelect;

        handleChangeSubscribe(obj);
    }

    return (
        <label key={option} className="select__option" tabindex="0" data-value={option}>
            <input onChange={selectHandler} className="select__input" type="radio" name={item} checked={(i === 0 ? checkedSubscribeSelect : !checkedSubscribeSelect) ? true : false} />
            <span className="radio-style">
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            <span className="select__option-text">{option}</span>
        </label>
    );
}

export default SubscribeOption;