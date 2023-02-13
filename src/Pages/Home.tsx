import { PromoCollection, Brands, Actual, PromoSale, IconsSlider, SliderSection, Instagram, SeoText, BlogSection, ProductPopup } from '../Components';
import { Sections } from '../enums/Section';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Home = () => {
    const { products } = useTypedSelector((state) => state.productsReducer);
    const { activeProduct } = useTypedSelector((state) => state.productReducer);

    return (
        <>
            <main className="page page--padding-bottom_xs">
                <div className="container">
                    <PromoSale />

                    <IconsSlider />

                    <SliderSection items={products} title={Sections.Popular.title} />

                    <Actual />

                    <Brands />

                    <SliderSection items={products} title={Sections.New.title} />

                    <section className="section">
                        <PromoCollection />
                    </section>

                    <BlogSection />

                    <Instagram {...Sections.Instagram} />
                </div>
            </main>

            <div className="container">
                <SeoText className="home-page__seo-text section" />
            </div>

            {activeProduct &&
                <div className="overlay active">
                    <ProductPopup {...activeProduct} />
                </div>
            }
        </>
    );
}

export default Home;