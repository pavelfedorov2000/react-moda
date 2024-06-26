import { useMemo } from 'react';
import loriata from '../../assets/images/icons/loriata.png';
import coat from '../../assets/images/icons/coat.png';
import certificate from '../../assets/images/icons/certificate.svg';
import { ProductLink as ProductLinkType } from '../../interfaces/ProductLink';
import ProductLink from '../ProductLink';

// Костыльное склонение (просто для практики)
function generateWord(text: string) {
    let nameArr = text.split('');
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

function brandUpper(text: string): string {
    text.split('').map((letter) => letter.toUpperCase()).join('')
    return text;
}

const mainClass = 'product-links';

const ProductLinks = ({ name, brand }: { name: string; brand: string; }) => {
    const productLinks: ProductLinkType[] = useMemo(() => [{
        src: loriata,
        title: `Все ${generateWord(name)} ${brandUpper(brand)}`,
        subtitle: 'Категория и бренд',
    }, {
        src: loriata,
        title: `Все товары ${brandUpper(brand)}`,
        subtitle: 'Бренд',
    }, {
        src: coat,
        title: `Все ${generateWord(name)}`,
        subtitle: 'Категория',
        cover: true
    }, {
        src: certificate,
        title: 'Только оригинальные бренды',
        subtitle: 'Гарантия подлинности',
    }], [name, brand]);

    return (
        <ul className={mainClass}>
            {productLinks.map((item, index) => (
                <li key={index} className={`${mainClass}__item`}>
                    <ProductLink {...item} />
                </li>
            ))}
        </ul>
    );
}

export default ProductLinks;