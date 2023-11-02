import { OrderProduct as OrderProductType } from "../interfaces/OrderProduct";
import ProductList from "./ProductList";

const mainClass = 'order-product';

const OrderProduct = ({ articul, name, brand, sizes, imageUrl, color, totalCount }: OrderProductType) => {
    return (
        <article className={mainClass}>
            <div className={`${mainClass}__img`}>
                <img src={imageUrl} alt={`${name} ${brand}`} />
            </div>
            <div className={`${mainClass}__title product-title`}>
                {name} {brand}
            </div>
            <ProductList className={`${mainClass}__list`} articul={articul} size={sizes[0]} color={color} totalCount={totalCount} />
        </article>
    );
}

export default OrderProduct;