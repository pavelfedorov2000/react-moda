import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Pages } from '../enums/Page';
import { Brand } from '../interfaces/Brand';
import { Section } from '../components/Layout';
import BrandsList from '../components/BrandsList';

const Brands = () => {
    const [brands, setBrands] = useState<Brand[]>([]);
    useEffect(() => {
        axios.get<Brand[]>(Pages.Brands.path).then(({ data }) => {
            setBrands(data);
        });
    }, []);

    return (
        <Section title={Pages.Brands.title} link={Pages.Brands.path}>
           <BrandsList items={brands} /> 
        </Section>
    );
}

export default Brands;