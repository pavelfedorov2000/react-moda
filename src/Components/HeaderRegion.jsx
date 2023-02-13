import { useState, useEffect, useRef } from 'react';
import drop from '../assets/images/icons/drop.svg';
import classNames from 'classnames';
import { CITIES } from '../constants/cities';

const HeaderRegion = () => {
    const [visibleSelect, setVisibleSelect] = useState(false);

    const citySelectRef = useRef();

    const [currentCity, setCity] = useState(CITIES[0]);

    const [cities, setCities] = useState(CITIES.reverse());

    const toggleSelect = () => {
        setVisibleSelect((prevState) => !prevState);
    }

    const selectCity = (e) => {
        setCity(e.target.textContent);
        setCities(CITIES.reverse());
    }

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(citySelectRef.current)) {
            setVisibleSelect(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div className="header__region region-header">
            <div className="region-header__title">
                Регион доставки:
            </div>
            <div ref={citySelectRef} onClick={toggleSelect} className="region-header__value" style={{ backgroundImage: `url(${drop})` }}>{currentCity}</div>
            {visibleSelect &&
                <div className="region-header__drop">
                    {cities.map((city, i) => (
                        <div key={`city-${i}`} onClick={selectCity} className={classNames('region-header__drop-item', {
                            'region-header__drop-item--active': city === currentCity
                        })}>{city}</div>
                    ))}
                </div>
            }
        </div>
    );
}

export default HeaderRegion;