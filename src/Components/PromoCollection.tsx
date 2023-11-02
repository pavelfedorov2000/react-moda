import collectionPicture from '../assets/images/content/collection.jpg';
import { Pages } from '../enums/Page';
import { TitleLevel } from '../enums/TitleLevel';
import { Image, Title } from '../ui';
import AllLink from './AllLink';

const mainClass = 'promo-collection';

const PromoCollection = () => {
    return (
        <article className={mainClass}>
            <div className={`${mainClass}__img`}>
                <Image src={collectionPicture} alt="жилетка" width={724} height={350} />
            </div>

            <div className={`${mainClass}__suptitle`}>Ретро стиль в современной одежде</div>

            <Title tag={TitleLevel.H3} className={`title ${mainClass}__title`}>
                Свитеры и жилетки.<br />
                Зима 2022
            </Title>

            <AllLink className={`${mainClass}__link`} url={Pages.Catalog.path} text="Смотреть коллекцию" />
        </article>
    );
}

export default PromoCollection;