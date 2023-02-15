import { CatalogHomeCard } from '../Components';
import { CATEGORIES } from '../constants/categories';

function CatalogHome() {
    return (
        <main className="page catalog-home">
            <div className="container">
                <div className="catalog-home__grid">
                    {
                        CATEGORIES.map((category, index) => (
                            <CatalogHomeCard key={category.href} index={index} {...category} />
                        ))
                    }
                </div>
            </div>
        </main>
    );
}

export default CatalogHome;

