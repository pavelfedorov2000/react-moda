import { useState } from 'react';
import { DropMenu, SearchForm, HeaderInfoLine, HeaderRegion, WhatsApp, Logo, HeaderActions, ContactsHeader, BurgerButton } from '..';
import classNames from 'classnames';
import ActionHeader from '../ActionHeader';
import { PinIcon } from '../HeaderActions/icons';
import NavHeader from '../NavHeader';
import { ClassName } from '../../enums/ClassName';
import Container from './Container';

const mainClass = 'header';

const Header = () => {
    const [visibleSearch, setVisibleSearch] = useState(false);
    const toggleSearch = () => {
        setVisibleSearch((v) => !v);
    }

    return (
        <header className={mainClass}>
            <div className={`${mainClass}__top`}>
                <Container className={`${mainClass}__top-inner`}>
                    <HeaderRegion />
                    <ActionHeader className={`${mainClass}__shops-search`} icon={<PinIcon />} text="Найти магазины" href="#" />
                    <ContactsHeader className="contacts-header" />
                    <WhatsApp className={`${mainClass}__whatsapp`} />
                </Container>
            </div>

            <HeaderInfoLine />

            <div className={`${mainClass}__main`}>
                <Container>
                    <div className={`${mainClass}__main-top`}>
                        <NavHeader className={`${mainClass}__nav`} />
                        <BurgerButton />
                        <Logo className={mainClass} width={207} height={31} />
                        <HeaderActions onClickSearch={toggleSearch} />
                    </div>

                    <div className={classNames(`${mainClass}__main-bottom`, {
                        [ClassName.Active]: visibleSearch
                    })}>
                        <DropMenu />
                        <SearchForm className="header__search" isVisible={visibleSearch} />
                    </div>
                </Container>
            </div>
        </header>
    );
}

export default Header;

