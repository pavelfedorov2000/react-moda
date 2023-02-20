import { useState, useRef } from 'react';
import dropIcon from '../assets/images/icons/drop.svg';
import classNames from 'classnames';
import { CITIES } from '../constants/cities';
import useHandleOutsideClick from '../hooks/useHandleOutsideClick';

const HeaderRegion = () => {
    const [visibleSelect, setVisibleSelect] = useState(false);

    const citySelectRef = useRef<HTMLButtonElement>(null);

    const [currentCity, setCity] = useState(CITIES[0]);

    const [cities, setCities] = useState(CITIES.reverse());

    const toggleSelect = () => {
        setVisibleSelect((prevState) => !prevState);
    }

    const selectCity = (index: number) => {
        setCity(CITIES[index]);
        setCities(CITIES.reverse());
    }

    useHandleOutsideClick(citySelectRef, setVisibleSelect);

    return (
        <div className="header__region region-header">
            <div className="region-header__title">
                Регион доставки:
            </div>
            <button ref={citySelectRef} onClick={toggleSelect} className="region-header__value" aria-expanded={visibleSelect} type="button" style={{ backgroundImage: `url(${dropIcon})` }}>{currentCity}</button>
            {visibleSelect &&
                <div className="region-header__drop">
                    {cities.map((city, index) => (
                        <div key={city.toString()} onClick={() => selectCity(index)} className={classNames('region-header__drop-item', {
                            'active': city === currentCity
                        })}>{city}</div>
                    ))}
                </div>
            }
        </div>
    );
}

export default HeaderRegion;