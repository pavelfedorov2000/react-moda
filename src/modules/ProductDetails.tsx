import classNames from 'classnames';
import { ProductDetails as ProductDetailsType } from '../interfaces/ProductDetails';
import ProductDetailsSection from './ProductDetailsSection';
import { ClassName } from '../enums/ClassName';

interface Props {
    details: ProductDetailsType[];
    index: number;
    activeTab: number;
    ariaLabelledBy: string;
}

const ProductDetails = ({ details, index, activeTab, ariaLabelledBy }: Props) => {
    return (
        <div className={classNames(`${ClassName.TabsContent} product-details`, {
            [ClassName.Active]: index === activeTab
        })} role="tabpanel" aria-labelledby={ariaLabelledBy} id="tabpanel-1" tabIndex={index === activeTab ? 0 : -1}>
            {details.map((section, index) => (
                <ProductDetailsSection key={index} index={index} {...section} />
            ))}
        </div>
    );
}

export default ProductDetails;