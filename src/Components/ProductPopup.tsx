import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProductSizes from "./ProductSizes";
import Prices from "./Prices";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SliderArrows from "./SliderArrows";
import { CatalogItem } from "../interfaces/CatalogItem";
import { SIZES } from "../constants/sizes";
import { splideOptions } from "../constants/splide";
import { useActions } from "../hooks/useActions";

interface ProductListItem {
    key: string;
    value: string;
}

const productList: ProductListItem[] = [{
    key: "Сезон",
    value: "Демисезон"
}, {
    key: "Материал",
    value: "Альпака"
}, {
    key: "Состав материала",
    value: "Шерсть 38%, Альпака 62%"
}, {
    key: "Диапазон температур, °С",
    value: "от 0 до +15"
}, {
    key: "Страна производства",
    value: "Латвия"
}, {
    key: "Параметры модели",
    value: "89-60-84"
}, {
    key: "Рост модели на фото",
    value: "176 см"
}, {
    key: "Длина рукава:",
    value: "60 см"
}];

const ProductPopup = ({id, name, brand, sizes, price, imageUrl, discount, newProduct}: CatalogItem) => {
    const catalogPopupRef = useRef();

    const { closeProductPopup } = useActions();

    const [checkedSize, setCheckedSize] = useState(SIZES[0]);
    const onCheckSize = (size: number) => {
        setCheckedSize(size);
    }

    return (
        <div className="popup product-popup">
            <button onClick={closeProductPopup} className="popup__close" type="button">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.1871 7L16 14.1871L8.81286 7L7 8.81286L14.1871 16L7 23.1871L8.81286 25L16 17.8129L23.1871 25L25 23.1871L17.8129 16L25 8.81286L23.1871 7Z" />
                </svg>
            </button>

            <div className="labels">
                {discount !== 0 &&
                    <span className="label label--discount">{discount}%</span>
                }

                {newProduct &&
                    <span className="label label--new">new</span>
                }
            </div>

            <div className="product-popup__inner">
                <Splide className="product-popup__slider" hasTrack={false} options={{
                    ...splideOptions,
                    perPage: 1
                }}>
                    <SliderArrows isRound />
                    <SplideTrack>
                        {Array(4).fill(0).map((_, index) => (
                            <SplideSlide key={index + 1} className="product-popup__slider-item">
                                <img src={imageUrl} alt="фото" />
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>

                <div className="product-popup__content">
                    <div className="product-popup__content-top">
                        <div className="product-popup__title">{`${name} ${brand}`}</div>

                        <Prices price={price} discount={discount} />
                    </div>

                    <form className="product-popup__form product-card-form">
                        <ProductSizes sizes={sizes} checkedSize={checkedSize} onCheckSize={onCheckSize} />

                        <div className="product-card-form__buttons">
                            
                        </div>
                    </form>

                    <div className="about-product product-popup__about">
                        <div className="about-product__title">О товаре</div>

                        <dl className="about-product__list">
                            {productList.map((item) => (
                                <div key={item.key.toString()}>
                                    <dt>{item.key}</dt>
                                    <dd>{item.value}</dd>
                                </div>
                            ))}
                        </dl>

                        <Link to={`/product-card/${id}`} className="popup-link">Подробнее</Link>
                    </div>
                </div>

                <Link onClick={closeProductPopup} className="product-popup__more-link" to={`/product-card/${id}`}>
                    <span>Больше информации о товаре</span>
                    <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928932C48.9526 0.538408 48.3195 0.538408 47.9289 0.928932C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM0 9H55V7H0V9Z"
                            fill="#101112" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default ProductPopup;