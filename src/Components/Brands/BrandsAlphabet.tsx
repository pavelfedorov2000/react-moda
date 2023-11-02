import { Link } from "react-router-dom";
import { Pages } from "../../enums/Page";

interface Props {
    brand: string | null;
    alphabet: any;
}

const mainClass = 'brands-alphabet';

const BrandsAlphabet = ({ brand, alphabet }: Props) => {
    return (
        <dl className={mainClass}>
            {Object.keys(alphabet).map((key: string) => (
                <div key={key} id={key} className={`${mainClass}__item`} style={{ display: brand === null || brand === key ? 'block' : 'none' }}>
                    <dt>{key}</dt>
                    <dd className={`${mainClass}__row`}>
                        <div className={`${mainClass}__col`}>
                            {alphabet[key].map((item: string) => (
                                <Link key={item.toString()} to={Pages.NotFound.path} className={`${mainClass}__link`}>{item}</Link>
                            ))}
                        </div>
                    </dd>
                </div>
            ))}
        </dl>
    );
};

export default BrandsAlphabet;