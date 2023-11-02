import { useState, useRef } from 'react';
import dropIcon from '../assets/images/icons/drop.svg';
import classNames from 'classnames';
import { CITIES } from '../constants/cities';
import useHandleOutsideClick from '../hooks/useHandleOutsideClick';
import { ClassName } from '../enums/ClassName';
import { useIsOpenState } from '../hooks/useIsOpenState';

const mainClass = 'region-header';

const HeaderRegion = () => {
    const citySelectRef = useRef<HTMLButtonElement>(null);

    const [currentCity, setCity] = useState(CITIES[0]);

    const [cities, setCities] = useState(CITIES.reverse());

    const [isOpen, isOpenTrigger, setIsOpen] = useIsOpenState();

    const selectCity = (index: number) => {
        setCity(CITIES[index]);
        setCities(CITIES.reverse());
    }

    useHandleOutsideClick(citySelectRef, setIsOpen);

    return (
        <div className={mainClass}>
            <div className={`${mainClass}__title`}>
                Регион доставки:
            </div>
            <button ref={citySelectRef} onClick={isOpenTrigger} className={`${mainClass}__value`} aria-expanded={isOpen} type="button" style={{ backgroundImage: `url(${dropIcon})` }}>{currentCity}</button>
            {isOpen &&
                <div className={`${mainClass}__drop`}>
                    {cities.map((city, index) => (
                        <div key={city.toString()} onClick={() => selectCity(index)} className={classNames(`${mainClass}__drop-item`, {
                            [ClassName.Active]: city === currentCity
                        })}>{city}</div>
                    ))}
                </div>
            }
        </div>
    );
}

export default HeaderRegion;