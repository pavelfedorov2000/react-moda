import classNames from 'classnames';
import { Auth, DropBasket, BurgerMenu } from './Components';
import AppRouter from './Components/AppRouter';
import { Footer, Header } from './Components/Layout';
import { useTypedSelector } from './hooks/useTypedSelector';

const App = () => {
    const { isAuthVisible, isAsideBasketVisible } = useTypedSelector((state) => state.asidePopupReducer);

    return (
        <div className='wrapper'>
            <Header />
            <BurgerMenu />
            <AppRouter />
            <Footer />
            <div className={classNames('overlay', {
                'active': isAuthVisible || isAsideBasketVisible
            })}>
                <DropBasket />
                <Auth />
            </div>
        </div>
    );
}

export default App;
