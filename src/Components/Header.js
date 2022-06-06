import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.svg';
import whatsup from '../assets/images/icons/whatsup.svg';
import burger from '../assets/images/icons/burger.svg';
import drop from '../assets/images/icons/drop.svg';
import { DropMenu, SearchForm, HeaderInfoLine } from '../Components';
import classNames from 'classnames';

function Header({ phone, onAsideBasketOpener, onAsideAuthOpener }) {
  const { totalCount } = useSelector(({ cart }) => cart);

  const navLinks = ['Женщинам', 'Детям', 'Мужчинам'];
  const [activeLink, ...restLinks] = navLinks;

  const citiesList = ['Санкт-Петербург', 'Москва'];

  const [visibleSelect, setVisibleSelect] = useState(false);

  const citySelectRef = useRef();

  const [currentCity, setCity] = useState(citiesList[0]);

  const [cities, setCities] = useState(citiesList.reverse());

  const toggleSelect = () => {
    setVisibleSelect(!visibleSelect);
  }

  const selectCity = (e) => {
    setCity(e.target.textContent);
    setCities(citiesList.reverse());
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
    <header className="header">
      <div className="header__top">
        <div className="container header__top-inner">
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
          <a className="header__shops-search" href="#">
            <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_611_26879)">
                <path
                  d="M7.42857 1.5C10.5056 1.5 13 4.0074 13 7.10045C13 8.13484 12.7986 9.20319 12.2206 9.97321L7.42857 16.3571L2.63656 9.97321C2.11156 9.27381 1.85714 8.03738 1.85714 7.10045C1.85713 4.0074 4.35156 1.5 7.42857 1.5ZM7.42857 4.74365C6.13387 4.74365 5.08399 5.79901 5.08399 7.10044C5.08399 8.40189 6.13387 9.45724 7.42857 9.45724C8.72326 9.45724 9.77314 8.40189 9.77314 7.10045C9.77314 5.79901 8.72326 4.74365 7.42857 4.74365Z"
                  fill="#101112" />
              </g>
              <defs>
                <clipPath>
                  <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0.5)" />
                </clipPath>
              </defs>
            </svg>
            Найти магазины
          </a>
          <div className="header__contact">
            <div className="header__call">
              <a href={`tel:${phone.split(' ').join('')}`} className="header__call-link">
                <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.1638 11.24L11.2838 10.12C11.4347 9.97104 11.6256 9.86906 11.8332 9.82646C12.0409 9.78385 12.2565 9.80246 12.4538 9.88002L13.8188 10.425C14.0183 10.506 14.1892 10.6441 14.3102 10.8221C14.4313 11 14.4969 11.2098 14.4988 11.425V13.925C14.4977 14.0714 14.4669 14.2161 14.4084 14.3502C14.3498 14.4844 14.2648 14.6054 14.1583 14.7058C14.0518 14.8062 13.926 14.8841 13.7886 14.9346C13.6512 14.9852 13.5051 15.0074 13.3588 15C3.79385 14.405 1.86385 6.30502 1.49885 3.20502C1.4819 3.05279 1.49738 2.89869 1.54427 2.75288C1.59116 2.60706 1.66839 2.47282 1.77088 2.35899C1.87337 2.24516 1.9988 2.15432 2.13893 2.09245C2.27905 2.03058 2.43068 1.99908 2.58385 2.00002H4.99885C5.21435 2.00066 5.42474 2.06575 5.60294 2.18694C5.78115 2.30812 5.91903 2.47984 5.99885 2.68002L6.54385 4.04502C6.62397 4.24155 6.64442 4.45734 6.60262 4.66543C6.56083 4.87351 6.45865 5.06467 6.30885 5.21502L5.18885 6.33502C5.18885 6.33502 5.83385 10.7 10.1638 11.24Z"
                    fill="#101112" />
                </svg>
                {phone}
              </a>
              <span className="header__call-descr">Звонок бесплатный</span>
            </div>
            <a href="https://wa.me/" className="header__whatsup" target="_blank" rel="nofollow">
              <img className="header__whatsup-icon" src={whatsup} alt="whatsup" width="16"
                height="16" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <HeaderInfoLine />
      <div className="header__main">
        <div className="container">
          <div className="header__main-top">
            <nav className="header__nav">
              <a href="#" className="header__nav-link active">{activeLink}</a>
              {restLinks.map((link, i) => (
                <a key={`link-${i}`} href="#" className="header__nav-link">{link}</a>
              ))}
            </nav>
            <button className="burger-btn" type="button" aria-label="Открыть меню">
              <img src={burger} alt="кнопка бургер" width="20" height="20" />
            </button>
            <div className="logo header__logo">
              <Link path="/" className="logo__link">
                <img className="logo__img header__logo-img" src={logo} alt="Логотип"
                  width="207" height="31" />
              </Link>
            </div>
            <div className="header__actions">
              <button className="header__search-btn" type="button"></button>
              <button onClick={onAsideAuthOpener} className="header__action" type="button">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.0013 8.50016C5.88797 8.50016 4.16797 6.78016 4.16797 4.66683C4.16797 2.5535 5.88797 0.833496 8.0013 0.833496C10.1146 0.833496 11.8346 2.5535 11.8346 4.66683C11.8346 6.78016 10.1146 8.50016 8.0013 8.50016Z"
                    fill="#101112" />
                  <path
                    d="M13.7268 15.1667H8.0001H2.27344C2.0001 15.1667 1.77344 14.94 1.77344 14.6667C1.77344 11.82 4.56677 9.5 8.0001 9.5C11.4334 9.5 14.2268 11.82 14.2268 14.6667C14.2268 14.94 14.0001 15.1667 13.7268 15.1667Z"
                    fill="#101112" />
                </svg>
                <span>Профиль</span>
              </button>
              <Link to="/favorite" className="header__action">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.9987 14.4331C7.79203 14.4331 7.59203 14.4064 7.42536 14.3464C4.8787 13.4731 0.832031 10.3731 0.832031 5.79307C0.832031 3.45974 2.7187 1.56641 5.0387 1.56641C6.16536 1.56641 7.2187 2.00641 7.9987 2.79307C8.7787 2.00641 9.83203 1.56641 10.9587 1.56641C13.2787 1.56641 15.1654 3.46641 15.1654 5.79307C15.1654 10.3797 11.1187 13.4731 8.57203 14.3464C8.40536 14.4064 8.20536 14.4331 7.9987 14.4331Z"
                    fill="#101112" />
                </svg>
                <span>Избранное</span>
              </Link>
              <button onClick={onAsideBasketOpener} className="header__action" type="button">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.9933 15.1668H4.99996C3.85329 15.1668 2.99329 14.8602 2.45996 14.2535C1.92662 13.6468 1.71995 12.7668 1.85995 11.6268L2.45996 6.62683C2.63329 5.1535 3.00663 3.8335 5.60662 3.8335H10.4066C13 3.8335 13.3733 5.1535 13.5533 6.62683L14.1533 11.6268C14.2866 12.7668 14.0866 13.6535 13.5533 14.2535C13 14.8602 12.1466 15.1668 10.9933 15.1668Z"
                    fill="#101112" />
                  <path
                    d="M10.6673 5.8335C10.394 5.8335 10.1673 5.60683 10.1673 5.3335V3.00016C10.1673 2.28016 9.72065 1.8335 9.00065 1.8335H7.00065C6.28065 1.8335 5.83398 2.28016 5.83398 3.00016V5.3335C5.83398 5.60683 5.60732 5.8335 5.33398 5.8335C5.06065 5.8335 4.83398 5.60683 4.83398 5.3335V3.00016C4.83398 1.72683 5.72732 0.833496 7.00065 0.833496H9.00065C10.274 0.833496 11.1673 1.72683 11.1673 3.00016V5.3335C11.1673 5.60683 10.9407 5.8335 10.6673 5.8335Z"
                    fill="#101112" />
                </svg>
                <span>Корзина
                  {totalCount != 0 ?
                    <span className="header__cart-num">{`(${totalCount})`}</span>
                    :
                    null
                  }
                </span>
              </button>
            </div>
          </div>
          <div className="header__main-bottom">
            <DropMenu />
            <SearchForm />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

