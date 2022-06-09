import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import search from '../assets/images/icons/search.svg';
import burger from '../assets/images/icons/burger.svg';
import { DropMenu, SearchForm, HeaderInfoLine, ShopsSearch, HeaderRegion, WhatsApp, Call, Logo } from '../Components';
import classNames from 'classnames';

function Header({ categories, activeCategory, onChangeCategory, phone, onAsideBasketOpener, onAsideAuthOpener, onOpenBurgerMenu, dropMenuCategories, links }) {
  // Вытаскиваем из стора общее количество добавленных в корзину товаров (сразу через деструктуризацию)
  const { totalCount } = useSelector(({ cart }) => cart);
  const { products } = useSelector(({ favorite }) => favorite);

  // Строка поиска на тач-устройствах
  const [visibleSearch, setVisibleSearch] = useState(false);
  const toggleSearch = () => {
    setVisibleSearch(!visibleSearch);
  }

  return (
    <header className="header">
      <div className="header__top">
        <div className="container header__top-inner">
          <HeaderRegion />
          <ShopsSearch />
          <div className="header__contact">
            <Call phone={phone} className="header__call" />
            <WhatsApp className="header__whatsapp" />
          </div>
        </div>
      </div>
      <HeaderInfoLine />
      <div className="header__main">
        <div className="container">
          <div className="header__main-top">
            <nav className="header__nav">
              {categories.map((category, i) => (
                <Link key={category.name} to={`/${category.name}`} onClick={() => onChangeCategory(i)} className={classNames('header__nav-link', {
                  'active': category.name === activeCategory
                })}>{category.text}</Link>
              ))}
            </nav>
            <button onClick={onOpenBurgerMenu} className="burger-btn" type="button" aria-label="Открыть меню">
              <img src={burger} alt="кнопка бургер" width="20" height="20" />
            </button>
            <Logo className="header" width="207" height="31" />
            <div className="header__actions">
              <button onClick={toggleSearch} className="header__search-btn" type="button" style={{ backgroundImage: `url(${search})` }}></button>
              <Link to="/profile/orders" className="header__action">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.0013 8.50016C5.88797 8.50016 4.16797 6.78016 4.16797 4.66683C4.16797 2.5535 5.88797 0.833496 8.0013 0.833496C10.1146 0.833496 11.8346 2.5535 11.8346 4.66683C11.8346 6.78016 10.1146 8.50016 8.0013 8.50016Z"
                    fill="#101112" />
                  <path
                    d="M13.7268 15.1667H8.0001H2.27344C2.0001 15.1667 1.77344 14.94 1.77344 14.6667C1.77344 11.82 4.56677 9.5 8.0001 9.5C11.4334 9.5 14.2268 11.82 14.2268 14.6667C14.2268 14.94 14.0001 15.1667 13.7268 15.1667Z"
                    fill="#101112" />
                </svg>
                <span>Профиль</span>
              </Link>
              <Link to="/favorite" className="header__action">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.9987 14.4331C7.79203 14.4331 7.59203 14.4064 7.42536 14.3464C4.8787 13.4731 0.832031 10.3731 0.832031 5.79307C0.832031 3.45974 2.7187 1.56641 5.0387 1.56641C6.16536 1.56641 7.2187 2.00641 7.9987 2.79307C8.7787 2.00641 9.83203 1.56641 10.9587 1.56641C13.2787 1.56641 15.1654 3.46641 15.1654 5.79307C15.1654 10.3797 11.1187 13.4731 8.57203 14.3464C8.40536 14.4064 8.20536 14.4331 7.9987 14.4331Z"
                    fill="#101112" />
                </svg>
                <span>
                  Избранное
                  {products.length != 0 ?
                    <span>{`(${products.length})`}</span>
                    :
                    null
                  }
                </span>
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
                    <span>{`(${totalCount})`}</span>
                    :
                    null
                  }
                </span>
              </button>
            </div>
          </div>
          <div className={classNames('header__main-bottom', {
            'header__main-bottom--active': visibleSearch
          })}>
            <DropMenu dropMenuCategories={dropMenuCategories} links={links} />
            <SearchForm visibleSearch={visibleSearch} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

