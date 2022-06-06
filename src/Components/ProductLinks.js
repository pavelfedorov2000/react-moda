import React from 'react';
import loriata from '../assets/images/icons/loriata.png';
import coat from '../assets/images/icons/coat.png';
import certificate from '../assets/images/icons/certificate.svg';


function ProductLinks(props) {

    const productLinks = [
        {
            src: loriata,
            title: 'Все пальто LORIATE',
            subtitle: 'Категория и бренд',
        },
        {
            src: loriata,
            title: 'Все товары LORIATE',
            subtitle: 'Бренд',
        },
        {
            src: coat,
            title: 'Все пальто',
            subtitle: 'Категория',
        },
        {
            src: certificate,
            title: 'Только оригинальные бренды',
            subtitle: 'Гарантия подлинности',
        },
    ];

    return (
        <ul className="product-links">
            {productLinks.map(item => (
                <li className="product-links__item">
                    <a href="#" className="product-links__item-link">
                        <img className="product-links__item-img" src={item.src} alt="иконка" width="40" height="40" />
                        <span className="product-links__item-title">{item.title}</span>
                        <span className="product-links__item-subtitle">{item.subtitle}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default ProductLinks;