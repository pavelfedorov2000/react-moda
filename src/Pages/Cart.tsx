import { BasketTable, BasketTotal, Checkout, Crumbs, EmptyBlock } from '../Components';
import Sticky from "wil-react-sticky";
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Page } from '../interfaces/Route';

const Cart = ({ title, emptyBlock }: Page) => {
    const { items } = useTypedSelector((state) => state.cartReducer);

    return (
        <main className="page basket-page">
            <div className="container">
                <Crumbs title={title} />

                <div className="page__top">
                    <h1 className="title">{title}</h1>
                </div>

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