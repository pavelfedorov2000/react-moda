import classNames from "classnames";
import { Link } from "react-router-dom";
import { Image } from "../ui";
import { Pages } from "../enums/Page";
import { CategoriesSliderItem } from "../interfaces/CategoriesSliderItem";

const mainClass = 'category-item';

const CategoryItem = ({ imageUrl, title }: CategoriesSliderItem) => {
    return (
        <Link className={mainClass} to={Pages.Catalog.path}>
            <span className={`${mainClass}__img`}>
                <Image src={imageUrl} alt={title} width={68} height={101} contain />
            </span>
            <span className={`${mainClass}__title`}>{title}</span>
        </Link>
    );
};

export default CategoryItem;