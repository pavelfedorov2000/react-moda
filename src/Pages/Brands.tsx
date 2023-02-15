import { useState } from 'react';
import axios from 'axios';
import { BrandsAlphabet, BrandsCategories, BrandsIndexList, CancelBrandLetter, Crumbs } from '../Components';
import { useEffect } from 'react';
import { Page } from '../interfaces/Route';
import { Alphabet } from '../interfaces/Alphabet';

const Brands = ({ title }: Page) => {
    const [alphabet, setAlphabet] = useState<Alphabet[]>([]);
    useEffect(() => {
        axios.get<Alphabet[]>('/alphabet').then(({ data }) => {
            setAlphabet(data);
        });
    }, []);

    //const alphabetMap = new Map(Object.entries(alphabet))

    const [activeBrand, setActiveBrand] = useState(null);
    const onAddActiveBrand = (e: any) => {
        const activeBrandArr = e.target.getAttribute('href').split('');
        setActiveBrand(activeBrandArr.splice(1, activeBrandArr.length - 1).join(''));
    }

    return (
        <main className="page brands-page">
            <div className="container">
                <Crumbs title={title} />

                <div className="page__top">
                    <h1 className="title">{title}</h1>
                </div>

                <div className="brands-page__body">
                   <BrandsCategories />

                    <div className="brands-wrap">
                        <BrandsIndexList onClick={onAddActiveBrand} brand={activeBrand} alphabet={alphabet} />

                        {activeBrand !== null &&
                            <CancelBrandLetter onClick={() => setActiveBrand(null)} />
                        }
                    </div>
                </div>

                <BrandsAlphabet alphabet={alphabet} brand={activeBrand} />
            </div>
        </main>
    );
}

export default Brands;