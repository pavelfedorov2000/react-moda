import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { SaleItem as SaleItemType } from '../interfaces/SaleItem';
import SaleItem from './SaleItem';

const Actual = () => {
    const [actual, setActual] = useState<SaleItemType[]>([]);
    useEffect(() => {
        axios.get<SaleItemType[]>('/actual').then(({ data }) => {
            setActual(data);
        });
    }, []);

    return (
        <section className="section actual">
            <div className="section__top">
                <h2 className="title">Актуально</h2>
            </div>

            <ul className="grid actual__grid grid--items-xl_4">
                {actual.map((item) => (
                    <li key={item.id}>
                        <SaleItem {...item} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Actual;