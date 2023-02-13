import { useState } from 'react';
import axios from 'axios';
import { PromoCollection, Brands, Actual, PromoSale, IconsSlider, SliderSection, Instagram, SeoText, CatalogCardPopup, BlogSection } from '../Components';
import { CatalogCardPopupContext } from '../context';
import { useEffect } from 'react';
import { Sections } from '../enums/Section';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products').then(({ data }) => {
            setProducts(data);
        });
    }, []);

    const [visibleCatalogCardPopup, setVisibleCatalogCardPopup] = useState(null);

    const closeCatalogCardPopup = () => {
        setVisibleCatalogCardPopup(null);
    }

    return (
        <CatalogCardPopupContext.Provider value={{
            setVisibleCatalogCardPopup
        }}>
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

            {visibleCatalogCardPopup !== null &&
                <div className="overlay active">
                    <CatalogCardPopup products={products} visibleCatalogCardPopup={visibleCatalogCardPopup} closeCatalogCardPopup={closeCatalogCardPopup} />
                </div>
            }
        </CatalogCardPopupContext.Provider>
    );
}

export default Home;