import classNames from 'classnames';
import { Auth, DropBasket, BurgerMenu } from './components';
import AppRouter from './components/AppRouter';
import { Footer, Header, Overlay } from './components/Layout';
import { useTypedSelector } from './hooks/useTypedSelector';
import { ClassName } from './enums/ClassName';

const App = () => {
    const { isAuthVisible, isAsideBasketVisible } = useTypedSelector((state) => state.asidePopupReducer);

    return (
        <div className={ClassName.Wrapper}>
            <Header />
            <BurgerMenu />
            <AppRouter />
            <Footer />
            <Overlay isActive={isAuthVisible || isAsideBasketVisible}>
                <DropBasket />
                <Auth />
            </Overlay>
        </div>
    );
}

export default App;
