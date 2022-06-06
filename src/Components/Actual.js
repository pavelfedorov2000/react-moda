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

  console.log(actual);

  return (
    <section class="section actual">
      <h2 class="title section__title">Актуально</h2>
      <div class="actual__grid">
        {actual.map(item => (
          <SaleItem className="actual__item" src={item.imageUrl} title={item.title} subtitle={item.subtitle} saleText={item.saleText} />
        ))}
      </div>
    </section>
  );
}

export default Actual;