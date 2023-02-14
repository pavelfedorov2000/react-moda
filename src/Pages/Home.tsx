import { useEffect } from 'react';
import { PromoCollection, Brands, Actual, PromoSale, IconsSlider, SliderSection, Instagram, SeoText, BlogSection, ProductPopup } from '../Components';
import { Sections } from '../enums/Section';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Home = () => {
    const { products } = useTypedSelector((state) => state.productsReducer);
    const { popupProduct } = useTypedSelector((state) => state.productReducer);
    const { items } = useTypedSelector((state) => state.blogReducer);

    const { fetchProducts, fetchBlog} = useActions();

    useEffect(() => {
        fetchProducts();
        fetchBlog();
    }, []);

    return (
        <>
            <main className="page page--padding-bottom_xs">
                <div className="container">
                    <PromoSale />

                    <IconsSlider />

                    <SliderSection items={products} title={Sections.Popular.title} />

                    <Actual />

                    <Brands />

                    <SliderSection items={products.filter((product) => product.newProduct)} title={Sections.New.title} />

                    <section className="section">
                        <PromoCollection />
                    </section>

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