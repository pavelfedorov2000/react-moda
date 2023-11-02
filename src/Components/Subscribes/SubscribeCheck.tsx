import checkIcon from '../../assets/images/icons/check.svg';
import { ClassName } from '../../enums/ClassName';
import { InputType } from '../../enums/InputType';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const SubscribeCheck = ({ text }: { text: string; }) => {
    const { changeSubscribe } = useActions();
    const { currentSubscribe } = useTypedSelector((state) => state.subscribesReducer);
    const isChecked = currentSubscribe?.items?.find((item) => item.name === text)?.active;

    return (
        <label className="sale-popup__form-check">
            <input onChange={() => changeSubscribe(text)} className={ClassName.Checkbox} type={InputType.Checkbox} checked={isChecked} />
            <span className={`${ClassName.Checkbox}__style`}>
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            <span className={`${ClassName.Checkbox}__text`}>по {text}</span>
        </label>
    );
}

export default SubscribeCheck;