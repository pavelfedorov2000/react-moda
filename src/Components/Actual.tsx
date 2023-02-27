import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { database } from '../constants/db';
import { SaleItem as SaleItemType } from '../interfaces/SaleItem';
import SaleItem from './SaleItem';

const Actual = () => {
    const [actual, setActual] = useState<SaleItemType[]>([]);
    useEffect(() => {
        axios.get(database).then(({ data }) => {
            setActual(data.actual);
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