import checkIcon from '../../../assets/images/icons/check.svg';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface Props {
    text: string;
}

const SubscribeCheck = ({ text }: Props) => {
    const { changeSubscribe } = useActions();
    const { currentSubscribe } = useTypedSelector((state) => state.subscribesReducer);
    const isChecked = currentSubscribe?.items?.find(item => item.name === text)?.active;

    const handleChangeSubscribe = () => {
        changeSubscribe({
            ...currentSubscribe,
            items: currentSubscribe?.items?.map(item => {
                if (item.name === text) {
                    return {
                        ...item,
                        active: !isChecked
                    }
                } else {
                    return item;
                }
            })
        });
    }

    return (
        <label className="sale-popup__form-check">
            <input onChange={handleChangeSubscribe} className="check-box" type="checkbox" checked={isChecked} />
            <span className="check-style">
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            <span className="check-text">по {text}</span>
        </label>
    );
}

export default SubscribeCheck;