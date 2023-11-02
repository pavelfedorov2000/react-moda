import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { SaleItem as SaleItemType } from '../interfaces/SaleItem';
import SaleItem from '../components/SaleItem';
import { Section } from '../components/Layout';
import Grid from '../components/Layout/Grid';
import { Sections } from '../enums/Section';

const Actual = () => {
    const [actual, setActual] = useState<SaleItemType[]>([]);
    useEffect(() => {
        axios.get<SaleItemType[]>(Sections.Actual.dataUrl).then(({ data }) => {
            setActual(data);
        });
    }, []);

    return (
        <Section title={Sections.Actual.title}>
            <Grid items={{ breakpoint: 'xl', value: 4 }} listItems={actual} listItem={SaleItem} />
        </Section>
    );
}

export default Actual;