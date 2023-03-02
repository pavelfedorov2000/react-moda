import { BasketTable, BasketTotal, Checkout } from '../Components';
import Sticky from "wil-react-sticky";
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Page } from '../interfaces/Route';
import PageTop from '../Components/Layout/PageTop';
import { Crumbs, EmptyBlock } from '../Components/Layout';

const Cart = ({ title, emptyBlock }: Page) => {
    const { items } = useTypedSelector((state) => state.cartReducer);

    return (
        <main className="page basket-page">
            <div className="container">
                <Crumbs title={title} />

                <PageTop title={title} />

                <form action="#">
                    {Object.keys(items).length !== 0 ?
                        <div className="basket-page__body">
                            <BasketTable />
                            <Sticky containerSelectorFocus=".basket-page__body" offsetTop={20} stickyEnableRange={[1025, Infinity]}>
                                <BasketTotal />
                            </Sticky>
                            <Checkout />
                        </div>
                        : <EmptyBlock {...emptyBlock} />
                    }
                </form>
            </div>
        </main>
    );
}

export default Cart;