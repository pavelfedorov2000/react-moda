import classNames from "classnames";
import { ProfileData } from "../enums/Auth";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { WithClassName } from "../types/types";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    gender: string;
}

const Gender = ({ onChange, className, gender }: Props & WithClassName) => {
    const { GENDER } = useTypedSelector((state) => state.profileReducer);

    return (
        <label className={classNames('radio radio--type_gender', className)}>
            <input onChange={onChange} className="radio-box" type="radio" name={ProfileData.GENDER} value={gender} checked={GENDER === gender ? true : false} />
            <span className="radio-style">
                <span className="radio-text">{gender}</span>
            </span>
        </label>
    );
};

export default Gender;