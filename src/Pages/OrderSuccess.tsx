import { OrderSuccessTable } from '../modules';
import { Crumbs } from '../components/Layout';
import PageTop from '../components/Layout/PageTop';
import { ClassName } from '../enums/ClassName';
import { Page } from '../interfaces/Route';

const OrderSuccess = ({ title, subtitle }: Page) => {
    return (
        <main className={ClassName.Page}>
            <div className={ClassName.Container}>
                <Crumbs title={title} />

                <PageTop title={title} />

                <div className={`${ClassName.Page}__subtitle`}>
                    {subtitle}
                </div>

                <OrderSuccessTable />
            </div>
        </main>
    );
}

export default OrderSuccess;