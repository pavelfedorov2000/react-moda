import checkIcon from '../../../assets/images/icons/check.svg';
import { useState } from 'react';

interface Props {
    isChecked?: boolean;
    option: string;
    index: number;
}

const SubscribeOption = ({ isChecked, option, index }: Props) => {
    const [checkedOption, setCheckedOption] = useState(isChecked);

    return (
        <label className="select__option" tabIndex={0}>
            <input className="select__input radio-box" name="subscribe_change" type="radio" checked={checkedOption ? true : false} />
            <span className="radio-style">
                {checkedOption && <span style={{ backgroundImage: `url(${checkIcon})` }}></span>}
            </span>
            <span className="select__option-text">{option}</span>
        </label>
    );
}

export default SubscribeOption;