import classNames from "classnames";
import { ClassName } from "../../enums/ClassName";

interface Props {
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    brand: string | null;
    alphabet: any;
}

const mainClass = 'brands-index-list';

const BrandsIndexList = ({ onClick, brand, alphabet }: Props) => {
    return (
        <ul className={mainClass}>
            {Object.keys(alphabet).map((key) => (
                <li key={key.toString()}>
                    <a onClick={onClick} href={`#${key}`} className={classNames(`${mainClass}__item`, {
                        [ClassName.Active]: brand === key
                    })}>{key}</a>
                </li>
            ))}
        </ul>
    );
};

export default BrandsIndexList;