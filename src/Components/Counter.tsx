import classNames from 'classnames';
import { WithClassName } from '../types/types';

interface Props {
    onMinus: () => void;
    onPlus: () => void;
    value: number;
}

const mainClass = 'counter';

const Counter = ({ onMinus, onPlus, value, className }: Props & WithClassName) => {
    return (
        <div className={classNames(mainClass, className)}>
            <button onClick={onMinus} className={`${mainClass}__btn`} type="button">
                <svg viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="10" y2="1" stroke="#9B9B9B" strokeWidth="2" />
                </svg>
            </button>

            <input className={`${mainClass}__input`} type="number" value={value} readOnly />

            <button onClick={onPlus} className={`${mainClass}__btn`} type="button">
                <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="5" x2="10" y2="5" stroke="#9B9B9B" strokeWidth="2" />
                    <line x1="5" y1="10" x2="5" stroke="#9B9B9B" strokeWidth="2" />
                </svg>
            </button>
        </div>
    );
}

export default Counter;