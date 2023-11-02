import classNames from "classnames";
import { ProductListText } from "../enums/ProductListText";
import { WithClassName } from "../types/types";

interface Props {
    articul: string;
    color: string;
    size: number;
    totalCount?: number;
}

const ProductList = ({ articul, color, size, totalCount, className }: Props & WithClassName) => {
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