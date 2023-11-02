import { useMemo, useState } from 'react';
import { ProductPopup } from '../components';
import "@fancyapps/ui/dist/fancybox.css";
import { useEffect } from 'react';
import { Sections } from '../enums/Section';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../redux/actions/products';
import { ProductCardContent, ProductCardInfo, ProductCardSlider, ProductLinks } from '../components/ProductCard';
import { Crumbs } from '../components/Layout';
import { ClassName } from '../enums/ClassName';
import { SectionId } from '../enums/SectionId';
import { SliderSection } from '../modules';

const mainClass = 'product-card';

const ProductCard = () => {
    const { id } = useParams();
    
    const { products } = useTypedSelector((state) => state.productsReducer);
    const { popupProduct } = useTypedSelector((state) => state.productReducer);
    const { sortBy, sortPrices, sortBrands, sortColors, sortSizes, sortStyles } = useTypedSelector((state) => state.filtersReducer);

    const activeProduct = products.find((product) => product.id == id);

    const [activeTab, setActiveTab] = useState(0);
    const onClickTab = (index: number) => {
        setActiveTab(index);
    }

    const asideSections = useMemo(() => [{
        name: SectionId.Recommended,
        title: Sections.Recommend.title,
        items: products.filter((product) => product.id !== activeProduct?.id && product.discount)
    }, {
        name: SectionId.Similar,
        title: Sections.SimilarGoods.title,
        items: products.filter((product) => {
            return product.id !== activeProduct?.id
                && product.brand === activeProduct?.brand
                || product.style === activeProduct?.style
                || product.newProduct === activeProduct?.newProduct
        })
    }], [products]);

    useEffect(() => {
        fetchProducts(sortBy, sortPrices, sortColors, sortSizes, sortBrands, sortStyles);
    }, [sortBy, sortPrices, sortColors, sortBrands, sortStyles, sortSizes]);

    return (
        <>
            {activeProduct &&
                <div className={ClassName.Container}>
                    <main className={`${ClassName.Page} ${mainClass}`}>
                        <Crumbs title={`${activeProduct.name} ${activeProduct.brand}`} product />

                        <div className={`${mainClass}__inner`}>
                            <ProductCardContent mainClass={mainClass} {...activeProduct} />

                            <ProductCardSlider mainClass={mainClass} imageUrl={activeProduct.imageUrl} />

                            <div className={`${mainClass}__links`}>
                                <ProductLinks {...activeProduct} />
                            </div>

                            <ProductCardInfo mainClass={mainClass} product={activeProduct} activeTab={activeTab} onClick={onClickTab} />
                        </div>
                    </main>

                    <aside className={`${mainClass}__page`}>
                        {asideSections.map((section) => (
                            <SliderSection key={section.name.toString()} items={section.items} title={section.title} />
                        ))}
                    </aside>

                    {popupProduct &&
                        <div className={`${ClassName.Overlay} ${ClassName.Active}`}>
                            <ProductPopup {...popupProduct} />
                        </div>
                    }
                </div>
            }
        </>
    );
}

export default ProductCard;