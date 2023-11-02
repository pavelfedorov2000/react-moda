import { CatalogHomeCard } from '../components';
import { CATEGORIES } from '../constants/categories';
import { ClassName } from '../enums/ClassName';
import { generatePageClassName } from '../utils/generatePageClassName';

const mainClass = 'catalog-home';

const CatalogHome = () => {
    return (
        <main className={generatePageClassName(mainClass)}>
            <div className={ClassName.Container}>
                <div className={`${mainClass}__grid`}>
                    {CATEGORIES.map((category, index) => (
                        <CatalogHomeCard key={category.href} index={index} {...category} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default CatalogHome;

