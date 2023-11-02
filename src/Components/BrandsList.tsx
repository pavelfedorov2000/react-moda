import { Link } from "react-router-dom";
import { Image } from "../ui";
import { Pages } from "../enums/Page";
import { Brand } from "../interfaces/Brand";

const mainClass = 'brands-list';

const BrandsList = ({ items }: { items: Brand[] }) => {
    return (
        <ul className={mainClass}>
            {items.map((brand) => (
                <li key={brand.name}>
                    <Link to={Pages.Catalog.path} className={`${mainClass}__item`}>
                        <Image className={`${mainClass}__item-img`} src={brand.imageUrl} alt={`логотип ${brand.name}`} width={brand.width} height={brand.height} />
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default BrandsList;