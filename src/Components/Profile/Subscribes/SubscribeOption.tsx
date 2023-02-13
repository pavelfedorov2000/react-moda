import checkIcon from '../../../assets/images/icons/check.svg';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface Props {
    text: string;
    option: string;
    index: number;
}

const SubscribeOption = ({option, text, index }: Props) => {
    const { changeSubscribe } = useActions();
    const { currentSubscribe } = useTypedSelector((state) => state.subscribesReducer);
    const isActive = currentSubscribe?.items?.find(item => item.name === text)?.active;
    const isChecked = isActive ? 0 : 1;

    return (
        <label className="select__option" tabIndex={0}>
            <input onChange={() => changeSubscribe(text)} className="select__input radio-box" name="subscribe_change" type="radio" checked={isChecked === index} />
            <span className="radio-style">
                {isChecked === index && <span style={{ backgroundImage: `url(${checkIcon})` }}></span>}
            </span>
            <span className="select__option-text">{option}</span>
        </label>
    );
}

export default SubscribeOption;