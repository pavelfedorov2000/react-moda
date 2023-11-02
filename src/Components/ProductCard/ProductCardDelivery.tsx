import delivery from '../../assets/images/icons/delivery-issue.svg';
import truck from '../../assets/images/icons/truck.svg';
import { TitleLevel } from '../../enums/TitleLevel';
import { Image, Title } from '../../ui';

const mainClass = 'product-card-delivery';

const ProductCardDelivery = ({ mainClass }: { mainClass: string; }) => {
    return (
        <section className={`product-card__section ${mainClass}`}>
            <Title tag={TitleLevel.H4} className="product-card__section-title">Доставка</Title>

            <div className={`${mainClass}__row`}>
                <div className={`${mainClass}__item`}>
                    <Image className={`${mainClass}__item-img`} src={delivery} alt="иконка курьера" width={35} height={35} />

                    <div className={`${mainClass}__item-text`}>
                        В пункты выдачи заказов - бесплатно при покупке от 1&nbsp;500&nbsp;₽
                    </div>
                </div>

                <div className={`${mainClass}__item`}>
                    <Image className={`${mainClass}__item-img`} src={truck} alt="иконка грузовика" width={35} height={35} />

                    <div className={`${mainClass}__item-text`}>
                        По адресу курьером - с&nbsp;примеркой, бесплатно при покупке от 1&nbsp;500&nbsp;₽
                    </div>
                </div>
            </div>

            <button className="scroll-link" data-link="delivery" type="button">Подробнее</button>
        </section>
    );
}

export default ProductCardDelivery;