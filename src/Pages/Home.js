import React, { useState } from 'react';
import axios from 'axios';
import { Collection, Brands, Actual, PromoSale, IconsSlider, SliderSection, Instagram, SeoText, CatalogCardPopup, BlogSection } from '../Components';
import { CatalogCardPopupContext } from '../context';

function Home() {
    const [products, setProducts] = useState([]);

    React.useEffect(() => {
        axios.get('/products').then(({ data }) => {
            setProducts(data);
        });
    }, []); // [] = componentDidMout

    const [visibleCatalogCardPopup, setVisibleCatalogCardPopup] = useState(null);

    const closeCatalogCardPopup = () => {
        setVisibleCatalogCardPopup(null);
    }

    return (
        <CatalogCardPopupContext.Provider value={{
            setVisibleCatalogCardPopup
        }}>
            <main className="page home-page">
                <div className="container home-page__wrapper">
                    <PromoSale />

                    <IconsSlider />

                    <section className="section">
                        <SliderSection products={products} setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} title="Популярные товары" />
                    </section>

                    <Actual />

                    <Brands />

                    <section className="section">
                        <SliderSection products={products} setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} title="Новинки" />
                    </section>

                    <Collection />

                    <BlogSection />

                    <Instagram />

                    <div className="section">
                        <SeoText className="home-page__seo-text" />
                    </div>
                </div>
            </main>

            {visibleCatalogCardPopup !== null &&
                <div className="overlay active">
                    <CatalogCardPopup products={products} visibleCatalogCardPopup={visibleCatalogCardPopup} closeCatalogCardPopup={closeCatalogCardPopup} />
                </div>
            }
        </CatalogCardPopupContext.Provider>
    );
}

export default Home;