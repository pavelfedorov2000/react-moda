import { useState } from 'react';
import { ProductColor as ProductColorType } from '../interfaces/ProductColor';

const ProductColor = ({ hex, index }: ProductColorType & { index: number; }) => {
    const [checkedColor, setCheckedColor] = useState(false);
    const onCheckColor = () => {
        setCheckedColor((checked) => !checked);
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