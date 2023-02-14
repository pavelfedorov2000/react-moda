import classNames from "classnames";
import { Link } from "react-router-dom";
import { BrandCategory as BrandCategoryType } from "../../interfaces/BrandCategory";
import coat from '../../assets/images/icons/coat-hanger.svg';

const BrandCategory = ({ imageUrl, name }: BrandCategoryType) => {
    return (
        <Link to="/" className="brand-category">
            <div className={classNames('brand-category__img', {
                'brand-category__img--all': imageUrl === coat
            })}>
                <img src={imageUrl} alt="иконка" width="50" height="36" />
            </div>
            <span className="brand-category__title">{name}</span>
        </Link>
    );
};

export default BrandCategory;