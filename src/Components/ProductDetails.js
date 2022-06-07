import classNames from 'classnames';
import React, { useState } from 'react';
import ProductDetailsSection from './ProductDetailsSection';

function ProductDetails({ details, id, index, activeTab }) {
  //console.log(details);
  const [productDetails, setProductDetails] = useState(details);
  const sections = Object.entries(productDetails);
  //console.log(sections);

  return (
    <div id={id} className={classNames('tabs-content product-details', {
      'tabs-content--active': index === activeTab
    })}>
      {sections.map((section, i) => (
        <ProductDetailsSection key={`section_${i + 1}`} section={section} />
      ))}
    </div>
  );
}

export default ProductDetails;