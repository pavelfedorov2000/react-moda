import React, { useState } from 'react';
import dropArr from '../assets/images/icons/drop.svg';

function ProductDetails({ details }) {
  console.log(details);
  const [productDetails, setProductDetails] = useState(details);
  const sections = Object.entries(productDetails);
  console.log(sections);

  return (
    <div id="details" className="tabs-content product-details tabs-content--active">
      {sections.map(section => (
        <section className="product-details__section">
          <div className="product-details__section-top">
            <h5 className="product-details__section-title">{section[0]}</h5>
            <button className="product-details__hide-btn" type="button">
              Скрыть
              <span style={{ backgroundImage: `url(${dropArr})`, transform: 'translate(180deg)' }}></span>
            </button>
          </div>
          <dl className="product-details__list">
            {Object.entries(section[1]).map(item => (
              <div className="product-details__list-item">
                <dt>{item[0]}</dt>
                <dd>{item[1]}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}

export default ProductDetails;