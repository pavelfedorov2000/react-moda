import classNames from 'classnames';
import { ProductDetails as ProductDetailsType } from '../../interfaces/ProductDetails';
import ProductDetailsSection from '../ProductDetailsSection';

interface Props {
    details: ProductDetailsType[];
    index: number;
    activeTab: number;
    ariaLabelledBy: string;
}

const ProductDetails = ({ details, index, activeTab, ariaLabelledBy }: Props) => {
    return (
        <div className={classNames('tabs-content product-details', {
            'active': index === activeTab
        })} role="tabpanel" aria-labelledby={ariaLabelledBy} id="tabpanel-1" tabIndex={index === activeTab ? 0 : -1}>
            {details.map((section, index) => (
                <ProductDetailsSection key={section.toString()} index={index} {...section} />
            ))}
        </div>
    );
}

export default ProductDetails;