import React from 'react';
import { CatalogHomeCard } from '../Components';

function CatalogHome({ categories, onChangeCategory }) {

    return (
        <main className="page catalog-home">
            <div className="container">
                <div className="catalog-home__grid">
                    {categories.map((category, i) => (
                        <CatalogHomeCard key={category.name} onChangeCategory={onChangeCategory} {...category} index={i} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default CatalogHome;