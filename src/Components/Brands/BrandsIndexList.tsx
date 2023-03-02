import classNames from "classnames";

interface Props {
    onClick: (event: any) => void;
    brand: string | null;
    alphabet: any;
}

const BrandsIndexList = ({ onClick, brand, alphabet }: Props) => {
    return (
        <ul className="brands-index-list">
            {Object.keys(alphabet).map((key) => (
                <li key={key.toString()}>
                    <a onClick={onClick} href={`#${key}`} className={classNames('brands-index-list__item', {
                        'active': brand === key
                    })}>{key}</a>
                </li>
            ))}
        </ul>
    );
};

export default BrandsIndexList;