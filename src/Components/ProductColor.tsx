import { useState } from 'react';
import { ProductColor as ProductColorType } from '../interfaces/ProductColor';

interface Props extends ProductColorType {
    index: number;
}

const ProductColor = ({ hex, index }: Props) => {
    const [checkedColor, setCheckedColor] = useState(false);
    const onCheckColor = () => {
        setCheckedColor(!checkedColor);
    }

    return (
        <label className="radio radio--type_color">
            <input onChange={onCheckColor} className="radio-box" type="radio" name="COLOR" checked={index === 0 || checkedColor ? true : false} />
            <span className="radio-style" style={{ borderColor: `${hex}` }}>
                <span style={{ background: `${hex}` }}></span>
            </span>
        </label>
    );
}

export default ProductColor;