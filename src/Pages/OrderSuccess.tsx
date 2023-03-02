import { OrderSuccessTable } from '../Components';
import { Crumbs } from '../Components/Layout';
import PageTop from '../Components/Layout/PageTop';
import { Page } from '../interfaces/Route';

const OrderSuccess = ({ title, subtitle }: Page) => {
    return (
        <main className="page">
            <div className="container">
                <Crumbs title={title} />

                <PageTop title={title} />

                <div className="page__subtitle">
                    {subtitle}
                </div>

                <OrderSuccessTable />
            </div>
        </main>
    );
}

export default OrderSuccess;