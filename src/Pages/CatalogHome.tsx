import { CatalogHomeCard } from '../Components';
import { categories } from '../constants/categories';

function CatalogHome() {
    return (
        <main className="page catalog-home">
            <div className="container">
                <div className="catalog-home__grid">
                    {
                        categories.map((category) => (
                            <CatalogHomeCard key={category.href} {...category} />
                        ))
                    }
                </div>
            </div>
        </main>
    );
}

export default CatalogHome;

