import checkIcon from '../assets/images/icons/check.svg';

const FormAgree = () => {
    return (
        <label className="form-agree">
            <input className="checkbox__input" name="user_agree" type="checkbox" />
            <span className="checkbox__style">
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            <span className="checkbox__text">
                Я принимаю <a href="#">Пользовательское соглашение</a> о конфиденциальности
            </span>
        </label>
    );
}

export default FormAgree;