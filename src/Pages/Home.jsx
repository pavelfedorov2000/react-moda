import React, { useState } from 'react';
import axios from 'axios';
import { Collection, Brands, Actual, PromoSale, IconsSlider, SliderSection, Instagram, SeoText, CatalogCardPopup, BlogSection } from '../Components';
import { CatalogCardPopupContext } from '../context';
import { useEffect } from 'react';

function Home() {
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
            <main className="page home-page">
                <PromoSale />

                <IconsSlider />

                <SliderSection products={products} setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} title="Популярные товары" />

                <Actual />

                <Brands />

                <SliderSection products={products} setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} title="Новинки" />

                <section className="section">
                    <div className="container">
                        <Collection />
                    </div>
                </section>

                <BlogSection />

                <Instagram />
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