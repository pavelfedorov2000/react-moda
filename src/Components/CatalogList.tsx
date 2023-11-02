import classNames from "classnames";
import { CatalogViewOption } from "../enums/CatalogView";
import { CatalogItem, Product } from "../interfaces/CatalogItem";
import CatalogCard from "./CatalogCard/CatalogCard";

const mainClass = 'catalog-list';

interface Props {
    products: CatalogItem[];
    catalogView?: CatalogViewOption;
}

const CatalogList = ({ products, catalogView }: Props) => {
    return (
        <ul className={classNames(mainClass, {
            [`${mainClass}--two-cols`]: catalogView === CatalogViewOption.COL
        })}>
            {
                products.map((product) => (
                    <li key={product.id}>
                        <CatalogCard {...product} />
                    </li>
                ))
            }
        </ul>
    );
};

export default CatalogList;