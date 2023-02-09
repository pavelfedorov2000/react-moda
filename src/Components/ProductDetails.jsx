import classNames from 'classnames';
import React, { useState } from 'react';
import ProductDetailsSection from './ProductDetailsSection';

const ProductDetails = ({ details, id, index, activeTab }) => {
    const [productDetails, setProductDetails] = useState(details);
    const sections = Object.entries(productDetails);

    return (
        <div id={id} className={classNames('tabs-content product-details', {
            'active': index === activeTab
        })}>
            {sections.map(section => (
                <ProductDetailsSection key={section.toString()} section={section} />
            ))}
        </div>
    );
}

export default ProductDetails;