import React from 'react';
import loriata from '../assets/images/icons/loriata.png';
import coat from '../assets/images/icons/coat.png';
import certificate from '../assets/images/icons/certificate.svg';
import classNames from 'classnames';

const ProductLinks = ({ name, brand }) => {

    // Костыльное склонение (просто для практики)
    function generateWord(str) {
        let nameArr = str.split('');
        const lastLetter = nameArr[nameArr.length - 1]; // последняя буква
        if (lastLetter === 'р' || lastLetter === 'н') { // джемпеР => все джемперЫ || комбинезоН => все комбинезонЫ
            nameArr.push('ы');
        }
        if (lastLetter === 'а') {
            nameArr.splice(-1, 1, `${nameArr[nameArr.indexOf(lastLetter) - 1] === 'м' ? 'ы' : 'и'}`); // юбкА => все юбкИ || блузкА => все блузкИ НО пижаМа => пижамЫ
        }
        if (lastLetter === 'к') { // пиджаК => все пиджакИ
            nameArr.push('и');
        }
        return nameArr.map((letter, i) => i == 0 ? letter.toLowerCase() : letter).join(''); // делаем первую буквы маленькой и склеиваем обратно в строку
    }

    function brandUpper(str) {
        str.split('').map(letter => letter.toUpperCase()).join('')
        return str;
    }

    const productLinks = React.useMemo(() => [{
        id: 0,
        src: loriata,
        title: `Все ${generateWord(name)} ${brandUpper(brand)}`,
        subtitle: 'Категория и бренд',
    }, {
        id: 1,
        src: loriata,
        title: `Все товары ${brandUpper(brand)}`,
        subtitle: 'Бренд',
    }, {
        id: 2,
        src: coat,
        title: `Все ${generateWord(name)}`,
        subtitle: 'Категория',
        cover: true
    }, {
        id: 3,
        src: certificate,
        title: 'Только оригинальные бренды',
        subtitle: 'Гарантия подлинности',
    }], [name, brand]);

    return (
        <ul className="product-links">
            {productLinks.map(item => (
                <li key={item.id} className="product-links__item">
                    <a href="#" className="product-links__item-link">
                        <img className={classNames('product-links__item-img', {
                            'product-links__item-img--cover': item.cover
                        })} src={item.src} alt="иконка" width="40" height="40" />
                        <span className="product-links__item-title">{item.title}</span>
                        <span className="product-links__item-subtitle">{item.subtitle}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default ProductLinks;