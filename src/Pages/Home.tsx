import { useEffect } from 'react';
import { PromoCollection, SeoText, ProductPopup, CatalogCard } from '../components';
import { Sections } from '../enums/Section';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ClassName } from '../enums/ClassName';
import { Section, Slider } from '../components/Layout';
import { Actual, BlogSection, IconsSlider, PromoSale, Brands } from '../modules';
import { Instagram } from 'react-content-loader';

const Home = () => {
    const { products } = useTypedSelector((state) => state.productsReducer);
    const { popupProduct } = useTypedSelector((state) => state.productReducer);
    const { items } = useTypedSelector((state) => state.blogReducer);
    const { sortBy, sortPrices, sortBrands, sortColors, sortSizes, sortStyles } = useTypedSelector((state) => state.filtersReducer);

    const { fetchProducts, fetchBlog} = useActions();

    useEffect(() => {
        fetchBlog();
    }, []);

    useEffect(() => {
        fetchProducts(sortBy, sortPrices, sortColors, sortSizes, sortBrands, sortStyles);
    }, []);

    return (
        <>
            <main className={`${ClassName.Page} ${ClassName.Page}--padding-bottom_xs`}>
                <div className={ClassName.Container}>
                    <PromoSale />

                    <IconsSlider />

                    <Section isSlider>
                        <Slider className={ClassName.Section} isSliderSection ariaLabel={Sections.Popular.title} slides={products} item={CatalogCard} />
                    </Section>

                    <Actual />

                    <Brands />

                    <Section isSlider>
                        <Slider className={ClassName.Section} isSliderSection ariaLabel={Sections.New.title} slides={products.filter((product) => product.newProduct)} item={CatalogCard} />
                    </Section>

                    <div className={ClassName.Section}>
                        <PromoCollection />
                    </div>

                    <BlogSection items={[...items].slice(0, 3)} />

                    <Instagram {...Sections.Instagram} />

                    <SeoText />
                </div>
            </main>

            {popupProduct &&
                <div className="overlay active">
                    <ProductPopup {...popupProduct} />
                </div>
            }
        </>
    );
}

export default Home;