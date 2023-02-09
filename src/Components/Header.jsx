import React, { useContext, useState } from 'react';
import { DropMenu, SearchForm, HeaderInfoLine, ShopsSearch, HeaderRegion, WhatsApp, Call, Logo, NavHeader, BurgerBtn, HeaderActions } from '.';
import classNames from 'classnames';
import { AppContext } from '../context';

function Header({ onAsideBasketOpener, visibleBurgerMenu, handleOpenBurger, dropMenuCategories, links }) {
    const { phone } = useContext(AppContext);

    const [visibleSearch, setVisibleSearch] = useState(false);
    const toggleSearch = () => {
        setVisibleSearch((prevState) => !prevState);
    }

    return (
        <header className="header">
            <div className="header__top">
                <div className="container header__top-inner">
                    <HeaderRegion />
                    <ShopsSearch />
                    <Call phone={phone} className="header__call" />
                    <WhatsApp className="header__whatsapp" />
                </div>
            </div>

            <HeaderInfoLine />

            <div className="header__main">
                <div className="container">
                    <div className="header__main-top">
                        <NavHeader />

                        <BurgerBtn onClick={handleOpenBurger} isExpanded={visibleBurgerMenu} />

                        <Logo className="header" width="207" height="31" />

                        <HeaderActions onClickSearch={toggleSearch} onClick={onAsideBasketOpener} />
                    </div>

                    <div className={classNames('header__main-bottom', {
                        'active': visibleSearch
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

