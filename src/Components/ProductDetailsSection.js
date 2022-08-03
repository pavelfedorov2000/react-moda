import React, { useState } from 'react';
import dropArr from '../assets/images/icons/drop.svg';

function ProductDetailsSection({ section }) {

    const [visibleSection, setVisibleSection] = useState(true);

    const toggleSectionVisibility = () => {
        setVisibleSection(!visibleSection);
    }

    return (
        <section className="product-details__section">
            <div className="product-details__section-top">
                <h5 className="product-details__section-title">{section[0]}</h5>
                <button onClick={toggleSectionVisibility} className="product-details__hide-btn" type="button">
                    {!visibleSection && 'ра'}скрыть
                    <span style={{ backgroundImage: `url(${dropArr})`, transform: `rotate(${visibleSection ? '180deg' : '0deg'})` }}></span>
                </button>
            </div>
            <dl className="product-details__list">
                {visibleSection && Object.entries(section[1]).map((item, i) => (
                    <div key={`list-item_${i + 1}`} className="product-details__list-item">
                        <dt>{item[0]}</dt>
                        <dd>{item[1]}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}

export default ProductDetailsSection;