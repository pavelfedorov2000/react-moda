import { useState } from 'react';
import classNames from 'classnames';
import SubscribeOption from './SubscribeOption';
import { ClassName } from '../../enums/ClassName';
import { generateIconClassName } from '../../utils/generateIconClassName';
import { IconSize } from '../../enums/IconSize';

interface Props {
    text: string;
    active?: boolean;
}

const options = ['Да', 'Нет'];

const mainClass = 'select';

const SubscribePopupSelect = ({ text, active }: Props) => {
    const [activeSelect, setActiveSelect] = useState(false);
    const toggleSelect = () => {
        setActiveSelect((v) => !v);
    }

    return (
        <div className={mainClass}>
            <button onClick={toggleSelect} className={classNames(`${mainClass}__toggle`, {
                [ClassName.Active]: activeSelect
            })}>
                <span className={`${mainClass}__toggle-text`}>{active ? options[0] : options[1]}</span>
                <svg className={generateIconClassName(IconSize.MS)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fillRule='evenodd' clipRule='evenodd' d="M3.128 6L9.2 11.979L10 12.6338L10.8 11.9791L16.872 6L18 7.11218L10 15L2 7.11218L3.128 6Z" />
                </svg>
            </button>

            {activeSelect &&
                <div className={`${mainClass}__content`}>
                    {options.map((option, i) => (
                        <SubscribeOption key={option} index={i} option={option} text={text} />
                    ))}
                </div>
            }
        </div>
    );
}

export default SubscribePopupSelect;