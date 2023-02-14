import { useState } from 'react';
import dropArr from '../assets/images/icons/drop.svg';
import { ProductDetails } from '../interfaces/ProductDetails';

interface Props extends ProductDetails {
    index: number;
}

const ProductDetailsSection = ({ index, title, list }: Props) => {
    const [expanded, setexpanded] = useState(true);

    const toggleExpanded = () => {
        setexpanded((prevState) => !prevState);
    }

    return (
        <section className="product-details__section">
            <h4 className="product-details__section-top" id={`product_details_accordion_heading_${index + 1}`}>
                <span className="product-details__section-title">{title}</span>
                <button onClick={toggleExpanded} className="product-details__toggle" type="button" aria-controls={`product_details_collapse_${index + 1}`} aria-expanded={expanded}>
                    <span>{!expanded && 'ра'}скрыть</span>
                    <span className="product-details__toggle-arrow" style={{ backgroundImage: `url(${dropArr})`, transform: `rotate(${expanded ? '180deg' : '0'})` }}></span>
                </button>
            </h4>
            {expanded &&
                <dl className="product-details__list" id={`product_details_collapse_${index + 1}`} aria-labelledby={`product_details_accordion_heading_${index + 1}`}>
                    {list.items.map((item) => (
                        <div key={item.property.toString()} className="product-details__list-item">
                            <dt>{item.property}</dt>
                            <dd>{item.value}</dd>
                        </div>
                    ))}
                </dl>
            }
        </section>
    );
}

export default ProductDetailsSection;