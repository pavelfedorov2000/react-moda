import classNames from 'classnames';

interface Props {
    onMinus: () => void;
    onPlus: () => void;
    value: number;
    className?: string;
}

const Counter = ({ onMinus, onPlus, value, className }: Props) => {
    return (
        <div className={classNames('counter', className)}>
            <button onClick={onMinus} className="counter__btn" type="button">
                <svg viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="10" y2="1" stroke="#9B9B9B" strokeWidth="2" />
                </svg>
            </button>

            <input className="counter__input" type="number" value={value} readOnly />

            <button onClick={onPlus} className="counter__btn" type="button">
                <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="5" x2="10" y2="5" stroke="#9B9B9B" strokeWidth="2" />
                    <line x1="5" y1="10" x2="5" stroke="#9B9B9B" strokeWidth="2" />
                </svg>
            </button>
        </div>
    );
}

export default Counter;