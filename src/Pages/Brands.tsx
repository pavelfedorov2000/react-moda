import { useState } from 'react';
import axios from 'axios';
import { BrandsAlphabet, BrandsCategories, BrandsIndexList, CancelBrandLetter } from '../components';
import { useEffect } from 'react';
import { Page } from '../interfaces/Route';
import { Alphabet } from '../interfaces/Alphabet';
import PageTop from '../components/Layout/PageTop';
import { Crumbs } from '../components/Layout';
import { generatePageClassName } from '../utils/generatePageClassName';
import { ClassName } from '../enums/ClassName';

const mainClass = 'brands-page';

const Brands = ({ title }: Page) => {
    const [alphabet, setAlphabet] = useState<Alphabet[]>([]);
    useEffect(() => {
        axios.get<Alphabet[]>('/alphabet').then(({ data }) => {
            setAlphabet(data);
        });
    }, []);

    const [activeBrand, setActiveBrand] = useState(null);
    const onAddActiveBrand = (event: any) => {
        const activeBrandArr = event.target.getAttribute('href').split('');
        setActiveBrand(activeBrandArr.splice(1, activeBrandArr.length - 1).join(''));
    }

    return (
        <main className={generatePageClassName(mainClass)}>
            <div className={ClassName.Container}>
                <Crumbs title={title} />

                <PageTop title={title} />

                <div className={`${mainClass}__body`}>
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