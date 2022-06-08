import React, { useState } from 'react';
import SubscribePopupSelect from './SubscribePopupSelect';
import SubscribeCheck from './SubscribeCheck';

function SubscribePopupItem({ subscribes, item, onClickChangeSubscribe, currentSubscribe }) {

    //console.log(item);

    const { id, title, items } = currentSubscribe;

    let obj = {
        id,
        title,
        items
    }

    const [checkedSubscribeCheckbox, setCheckedSubscribeCheckbox] = useState(subscribes[item]);
    const onCheckSubscribeCheckbox = () => {
        setCheckedSubscribeCheckbox(!checkedSubscribeCheckbox);
        setCheckedSubscribeSelect(!checkedSubscribeSelect);
    }

    const [checkedSubscribeSelect, setCheckedSubscribeSelect] = useState(subscribes[item]);
    const onCheckSubscribeSelect = () => {
        setCheckedSubscribeSelect(!checkedSubscribeSelect);
        setCheckedSubscribeCheckbox(!checkedSubscribeCheckbox);
    }

    return (
      <div key={item} className="sale-popup__form-item">
            <SubscribeCheck onCheckSubscribeCheckbox={onCheckSubscribeCheckbox} checkedSubscribeCheckbox={checkedSubscribeCheckbox} subscribes={subscribes} item={item} onClickChangeSubscribe={onClickChangeSubscribe} {...currentSubscribe} obj={obj} name={item} />
            <SubscribePopupSelect checkedSubscribeSelect={checkedSubscribeSelect} onCheckSubscribeSelect={onCheckSubscribeSelect} onClickChangeSubscribe={onClickChangeSubscribe} subscribes={subscribes} item={item} {...currentSubscribe} obj={obj} />
        </div>
    );
}

export default SubscribePopupItem;