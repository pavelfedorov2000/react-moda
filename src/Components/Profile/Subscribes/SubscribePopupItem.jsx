import React, { useContext, useState } from 'react';
import SubscribePopupSelect from './SubscribePopupSelect';
import SubscribeCheck from './SubscribeCheck';
import { SubscribeItemContext, SubscribesContext } from '../../../context';

function SubscribePopupItem() {
    const { currentSubscribe } = useContext(SubscribesContext);
    const { item } = useContext(SubscribeItemContext);

    const [checkedSubscribeCheckbox, setCheckedSubscribeCheckbox] = useState(currentSubscribe.items[item]);
    const onCheckSubscribeCheckbox = () => {
        setCheckedSubscribeCheckbox(!checkedSubscribeCheckbox);
        setCheckedSubscribeSelect(!checkedSubscribeSelect);
    }

    const [checkedSubscribeSelect, setCheckedSubscribeSelect] = useState(currentSubscribe.items[item]);
    const onCheckSubscribeSelect = () => {
        setCheckedSubscribeSelect(!checkedSubscribeSelect);
        setCheckedSubscribeCheckbox(!checkedSubscribeCheckbox);
    }

    return (
        <div key={item} className="sale-popup__form-item">
            <SubscribeCheck onCheckSubscribeCheckbox={onCheckSubscribeCheckbox} checkedSubscribeCheckbox={checkedSubscribeCheckbox} />
            <SubscribePopupSelect checkedSubscribeSelect={checkedSubscribeSelect} onCheckSubscribeSelect={onCheckSubscribeSelect} />
        </div>
    );
}

export default SubscribePopupItem;