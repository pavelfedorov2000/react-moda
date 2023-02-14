import { useState } from "react";
import { SIZES } from "../constants/sizes";

interface Props {
    sizes: number[];
}

const ProductSizes = ({ sizes }: Props) => {
    const [checkedSize, setCheckedSize] = useState(SIZES[0]);
    const onCheckSize = (size: number) => {
        setCheckedSize(size);
    }

    return (
        <div className="product-sizes">
            <div className="product-card-form__title product-sizes__title">Размер:</div>
            <div className="product-sizes__row">
                {SIZES.map((size) => (
                    <label key={size.toString()} className="radio radio--type_size">
                        <input onChange={() => onCheckSize(size)} className="radio-box" type="radio" name="SIZE" checked={size === checkedSize && SIZES.includes(sizes[sizes.indexOf(size)]) ? true : false} disabled={!SIZES.includes(sizes[sizes.indexOf(size)]) ? true : false} />
                        <span className="radio-text">{size}</span>
                    </label>
                ))}
            </div>
            <a data-fancybox href="#product-sizes-popup" className="popup-link">
                Таблица размеров
            </a>
        </div>
    );
}

export default ProductSizes;