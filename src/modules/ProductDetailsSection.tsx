import { useCallback, useMemo, useState } from 'react';
import dropArr from '../assets/images/icons/drop.svg';
import { ProductDetails } from '../interfaces/ProductDetails';
import { useIsOpenState } from '../hooks/useIsOpenState';

enum ToggleElement {
    Heading = 'heading',
    Dropdown = 'dropdown'
}

const id = 'product_details';

const ProductDetailsSection = ({ index, title, list }: ProductDetails & { index: number; }) => {
    const [isOpen, isOpenTrigger] = useIsOpenState();

    const getId = useCallback((elem: ToggleElement) => {
        return `${id}_${elem}_${index + 1}`;;
    }, [index]);

    const headingId = getId(ToggleElement.Heading);
    const dropdownId = getId(ToggleElement.Dropdown);

    return (
        <section className="product-details__section">
            <h4 className="product-details__section-top" id={headingId}>
                <span className="product-details__section-title">{title}</span>
                <button onClick={isOpenTrigger} className="product-details__toggle" type="button" aria-controls={dropdownId} aria-expanded={isOpen}>
                    <span>{!isOpen && 'ра'}скрыть</span>
                    <span className="product-details__toggle-arrow" style={{ backgroundImage: `url(${dropArr})`, transform: `rotate(${isOpen ? '180deg' : '0'})` }}></span>
                </button>
            </h4>
            {isOpen &&
                <dl className="product-details__list" id={dropdownId} aria-labelledby={headingId}>
                    {list.items.map((item, index) => (
                        <div key={index} className="product-details__list-item">
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