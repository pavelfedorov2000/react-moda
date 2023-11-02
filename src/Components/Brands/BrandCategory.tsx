import classNames from "classnames";
import { Link } from "react-router-dom";
import { BrandCategory as BrandCategoryType } from "../../interfaces/BrandCategory";
import coat from '../../assets/images/icons/coat-hanger.svg';
import { Image } from "../../ui";

const mainClass = 'brand-category';

const BrandCategory = ({ imageUrl, name }: BrandCategoryType) => {
    return (
        <Link to="/" className={mainClass}>
            <div className={classNames(`${mainClass}__img`, {
                [`${mainClass}__img--all`]: imageUrl === coat
            })}>
                <Image src={imageUrl} alt="иконка" width="50" height="36" cover />
            </div>
            <span className={`${mainClass}__title`}>{name}</span>
        </Link>
    );
};

export default BrandCategory;