import { BasketTable, BasketTotal } from '../components';
import Sticky from "wil-react-sticky";
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Page } from '../interfaces/Route';
import PageTop from '../components/Layout/PageTop';
import { Crumbs, EmptyBlock } from '../components/Layout';
import { generatePageClassName } from '../utils/generatePageClassName';
import { ClassName } from '../enums/ClassName';
import { Checkout } from '../modules';

const mainClass = 'basket-page';
const bodyClass = `${mainClass}__body`;

const Cart = ({ title, emptyBlock }: Page) => {
    const { items } = useTypedSelector((state) => state.cartReducer);

    return (
        <main className={generatePageClassName(mainClass)}>
            <div className={ClassName.Container}>
                <Crumbs title={title} />

                <PageTop title={title} />

                <form action="#">
                    {Object.keys(items).length !== 0 ?
                        <div className={bodyClass}>
                            <BasketTable />
                            <Sticky containerSelectorFocus={`.${bodyClass}`} offsetTop={20} stickyEnableRange={[1025, Infinity]}>
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