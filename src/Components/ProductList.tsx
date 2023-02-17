import classNames from "classnames";
import { ProductListText } from "../enums/ProductListText";

interface Props {
    articul: string;
    color: string;
    size: number;
    totalCount?: number;
    className?: string;
}

const ProductList = ({ articul, color, size, totalCount, className }: Props) => {
    return (
        <dl className={classNames('product-list', className)}>
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
            {totalCount &&
                <div>
                    <dt>{ProductListText.Quantity}:</dt>
                    <dd>{totalCount}</dd>
                </div>
            }
        </dl>
    );
};

export default ProductList;