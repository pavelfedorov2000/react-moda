import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pages } from '../enums/Page';
import { Brand } from '../interfaces/Brand';
import AllLink from './AllLink';

const Brands = () => {
    const [brands, setBrands] = useState<Brand[]>([]);
    useEffect(() => {
        axios.get<Brand[]>(Pages.Brands.path).then(({ data }) => {
            setBrands(data);
        });
    }, []);

    return (
        <section className="section brands">
            <div className="section__top">
                <h2 className="title">{Pages.Brands.title}</h2>
                <AllLink url={Pages.Brands.path} />
            </div>

            <ul className="brands__list">
                {brands.map((brand) => (
                    <li key={brand.name}>
                        <Link to={Pages.Catalog.path} className="brands__item" data-wow-duration="1s">
                            <img className="brands__item-img" src={brand.imageUrl} alt={`логотип ${brand.name}`} width={brand.width} height={brand.height} />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Brands;