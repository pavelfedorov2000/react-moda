import { useMemo, useState } from 'react';
import { SliderSection, Crumbs, ProductPopup } from '../Components';
import "@fancyapps/ui/dist/fancybox.css";
import { useEffect } from 'react';
import { Sections } from '../enums/Section';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../redux/actions/products';
import { ProductCardContent, ProductCardInfo, ProductCardSlider, ProductLinks } from '../Components/ProductCard';

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
        name: 'recommended',
        title: Sections.Recommend.title,
        items: products.filter((product) => product.id !== activeProduct?.id && product.discount)
    }, {
        name: 'similar',
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
                <div className="container">
                    <main className="page product-card">
                        <Crumbs title={`${activeProduct.name} ${activeProduct.brand}`} product={true} />

                        <div className="product-card__inner">
                            <ProductCardContent {...activeProduct} />

                            <ProductCardSlider imageUrl={activeProduct.imageUrl} />

                            <div className="product-card__links">
                                <ProductLinks {...activeProduct} />
                            </div>

                            <ProductCardInfo product={activeProduct} activeTab={activeTab} onClick={onClickTab} />
                        </div>
                    </main>

                    <aside className="product-card__page">
                        {asideSections.map((section) => (
                            <SliderSection key={section.name.toString()} items={section.items} title={section.title} />
                        ))}
                    </aside>

                    {popupProduct &&
                        <div className="overlay active">
                            <ProductPopup {...popupProduct} />
                        </div>
                    }
                </div>
            }
        </>
    );
}

export default ProductCard;