import { useState } from 'react';
import { Field as FieldType } from '../enums/Auth';
import { InputType } from '../enums/InputType';
import TogglePassword from './Auth/TogglePassword';

interface Props extends FieldType {
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    readOnly?: boolean;
}

const Field = ({ onInput, name, placeholder, type, value, readOnly }: Props) => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const onChangePasswordVisibility = () => {
        setVisiblePassword((v) => !v);
    }

    return (
        <label className="input input-label">
            <input
                onInput={onInput}
                name={name}
                placeholder={placeholder}
                type={type !== InputType.Password
                    ? type
                    : visiblePassword ? InputType.Text : InputType.Password
                }
                value={value}
                readOnly={readOnly} />
            <span className="input__label">{placeholder}</span>
            {type === InputType.Password && <TogglePassword visible={visiblePassword} onClick={onChangePasswordVisibility} />}
        </label>
    );
};

export default Field;