import delivery from '../assets/images/icons/delivery-issue.svg';
import truck from '../assets/images/icons/truck.svg';

const ProductCardDelivery = () => {
    return (
        <section className="product-card__section product-card-delivery">
            <h4 className="product-card__section-title">Доставка</h4>

            <div className="product-card-delivery__row">
                <div className="product-card-delivery__item">
                    <img className="product-card-delivery__item-img" src={delivery}
                        alt="иконка курьера" width="35" height="35" />

                    <div className="product-card-delivery__item-text">
                        В пункты выдачи заказов - бесплатно при покупке от 1&nbsp;500&nbsp;₽
                    </div>
                </div>

                <div className="product-card-delivery__item">
                    <img className="product-card-delivery__item-img" src={truck}
                        alt="иконка грузовика" width="35" height="35" />

                    <div className="product-card-delivery__item-text">
                        По адресу курьером - с&nbsp;примеркой, бесплатно при покупке от 1&nbsp;500&nbsp;₽
                    </div>
                </div>
            </div>

            <button className="scroll-link" data-link="delivery" type="button">Подробнее</button>
        </section>
    );
}

export default ProductCardDelivery;