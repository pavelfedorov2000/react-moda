import { OrderProduct as OrderProductType } from "../interfaces/OrderProduct";
import ProductList from "./ProductList";

const OrderProduct = ({ articul, name, brand, size, imageUrl, color, totalCount }: OrderProductType) => {
    return (
        <div className="order-product">
            <div className="order-product__img">
                <img src={imageUrl} alt={`${name} ${brand}`} />
            </div>
            <div className="product-title order-product__title">{name} {brand}</div>
            <ProductList className="order-product__list" articul={articul} size={size} color={color} totalCount={totalCount} />
        </div>
    );
}

export default OrderProduct;