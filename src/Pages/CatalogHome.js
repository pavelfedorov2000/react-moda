import React, { useContext } from 'react';
import { CatalogHomeCard } from '../Components';
import { AppContext } from '../context';

function CatalogHome() {
    const { categories } = useContext(AppContext);

    return (
        <main className="page catalog-home">
            <div className="container">
                <div className="catalog-home__grid">
                    {categories.map((category, i) => (
                        <CatalogHomeCard key={category.name} {...category} index={i} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default CatalogHome;