import { useState } from 'react';
import { DropMenu, SearchForm, HeaderInfoLine, HeaderRegion, WhatsApp, Logo, BurgerBtn, HeaderActions, ContactsHeader } from '..';
import classNames from 'classnames';
import ActionHeader from '../ActionHeader';
import { PinIcon } from '../HeaderActions/icons';

interface Props {
    visibleBurgerMenu: boolean;
    onOpenBurger: () => void;
    onOpenAsideBasket: () => void;
}

const Header = ({ visibleBurgerMenu, onOpenBurger, onOpenAsideBasket }: Props) => {
    const [visibleSearch, setVisibleSearch] = useState(false);
    const toggleSearch = () => {
        setVisibleSearch((prevState) => !prevState);
    }

    return (
        <header className="header">
            <div className="header__top">
                <div className="container header__top-inner">
                    <HeaderRegion />
                    <ActionHeader className="header__shops-search" icon={<PinIcon />} text="Найти магазины" href="#" />
                    <ContactsHeader className="contacts-header" />
                    <WhatsApp className="header__whatsapp" />
                </div>
            </div>

            <HeaderInfoLine />

            <div className="header__main">
                <div className="container">
                    <div className="header__main-top">

                        <BurgerBtn onClick={onOpenBurger} isExpanded={visibleBurgerMenu} />

                        <Logo className="header" width={207} height={31} />

                        <HeaderActions onClickSearch={toggleSearch} onClick={onOpenAsideBasket} />
                    </div>

                    <div className={classNames('header__main-bottom', {
                        'active': visibleSearch
                    })}>
                        <DropMenu />
                        <SearchForm isVisible={visibleSearch} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

