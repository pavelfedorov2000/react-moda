import coat from '../../assets/images/icons/coat-hanger.svg';
import woman from '../../assets/images/content/brands/woman.png';
import man from '../../assets/images/content/brands/man.png';
import children from '../../assets/images/content/brands/girl.png';
import { BrandCategory as BrandCategoryType } from '../../interfaces/BrandCategory';
import BrandCategory from './BrandCategory';

const categories: BrandCategoryType[] = [{
    name: "Все",
    imageUrl: coat
}, {
    name: "Женщинам",
    imageUrl: woman
}, {
    name: "Мужчинам",
    imageUrl: man
}, {
    name: "Детям",
    imageUrl: children
}];

const BrandsCategories = () => {
    return (
        <div className="brands-categories">
            {categories.map((category) => (
                <BrandCategory key={category.imageUrl} {...category} /> 
            ))}
        </div>
    );
};

export default BrandsCategories;