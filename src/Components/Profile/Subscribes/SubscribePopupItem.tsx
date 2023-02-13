import SubscribePopupSelect from './SubscribePopupSelect';
import SubscribeCheck from './SubscribeCheck';
import { SubscribeOption } from '../../../interfaces/Subscribe';

const SubscribePopupItem = ({ active, name }: SubscribeOption) => {
    return (
        <div className="sale-popup__form-item">
            <SubscribeCheck text={name} />
            <SubscribePopupSelect active={active} />
        </div>
    );
}

export default SubscribePopupItem;