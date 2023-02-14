import { Link } from "react-router-dom";

interface Props {
    brand: string | null;
    alphabet: any;
}

const BrandsAlphabet = ({ brand, alphabet }: Props) => {
    return (
        <dl className="brands-alphabet">
            {Object.keys(alphabet).map((key: string) => (
                <div key={key} id={key} className="brands-alphabet__item" style={{ display: brand === null || brand === key ? 'block' : 'none' }}>
                    <dt>{key}</dt>
                    <dd className="brands-alphabet__row">
                        <div className="brands-alphabet__col">
                            {alphabet[key].map((item: string) => (
                                <Link key={item.toString()} to="/not-found" className="brands-alphabet__link">{item}</Link>
                            ))}
                        </div>
                    </dd>
                </div>
            ))}
        </dl>
    );
};

export default BrandsAlphabet;