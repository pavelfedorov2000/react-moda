import axios from 'axios';
import React, { useState } from 'react';
import SaleItem from './SaleItem';

function Actual() {
    const [actual, setActual] = useState([]);
    React.useEffect(() => {
        axios.get('/actual').then(({ data }) => {
            setActual(data);
        });
    }, []); // [] = componentDidMout

    return (
        <section className="section actual">
            <div className="container">
                <div className="section__top">
                    <h2 className="title">Актуально</h2>
                </div>

                <div className="actual__grid">
                    {actual.map(item => (
                        <SaleItem key={item.id} className="actual__item" src={item.imageUrl} title={item.title} subtitle={item.subtitle} saleText={item.saleText} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Actual;