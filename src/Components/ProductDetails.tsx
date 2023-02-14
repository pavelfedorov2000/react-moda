import classNames from 'classnames';
import { ProductDetails as ProductDetailsType } from '../interfaces/ProductDetails';
import ProductDetailsSection from './ProductDetailsSection';

interface Props {
    details: ProductDetailsType[];
    id: string;
    index: number;
    activeTab: number;
}

const ProductDetails = ({ id, details, index, activeTab }: Props) => {
    return (
        <div id={id} className={classNames('tabs-content product-details', {
            'active': index === activeTab
        })}>
            {details.map((section, index) => (
                <ProductDetailsSection key={section.toString()} index={index} {...section} />
            ))}
        </div>
    );
}

export default ProductDetails;