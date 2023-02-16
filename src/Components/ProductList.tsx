import { ProductListText } from "../enums/ProductListText";

interface Props {
    articul: string;
    color: string;
    size: number;
}

const ProductList = ({ articul, color, size }: Props) => {
    return (
        <dl className="product-list basket-product__list">
            <div>
                <dt>{ProductListText.Articul}:</dt>
                <dd>{articul}</dd>
            </div>
            <div>
                <dt>{ProductListText.Color}:</dt>
                <dd>{color}</dd>
            </div>
            <div>
                <dt>{ProductListText.Size}:</dt>
                <dd>{size}</dd>
            </div>
        </dl>
    );
};

export default ProductList;