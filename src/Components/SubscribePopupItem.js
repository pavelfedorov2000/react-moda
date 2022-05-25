import React, { useState } from 'react';
import SubscribePopupSelect from './SubscribePopupSelect';
import SubscribeCheck from './SubscribeCheck';

function SubscribePopupItem({ subscribes, item, onClickChangeSubscribe, currentSubscribe }) {

  console.log(item);

  const [checkedSubscribeCheckbox, setCheckedSubscribeCheckbox] = useState(subscribes[item]);
  const onCheckSubscribeCheckbox = () => {
    setCheckedSubscribeCheckbox(!checkedSubscribeCheckbox);
    setCheckedSubscribeSelect(!checkedSubscribeSelect);
    /* items = {
      ...items,
      item: checkedSubscribeCheckbox
    }; */

    /* const newItems = items.reduce((obj, val) => {
      
    }, {}); */
  }

  const [checkedSubscribeSelect, setCheckedSubscribeSelect] = useState(subscribes[item]);
  const onCheckSubscribeSelect = () => {
    setCheckedSubscribeSelect(!checkedSubscribeSelect);
    setCheckedSubscribeCheckbox(!checkedSubscribeCheckbox);
    //obj.items[item] = checkedSubscribeSelect;
    //onClickChangeSubscribe(obj);
  }

  return (
    <div key={item} class="sale-popup__form-item">
      <SubscribeCheck onCheckSubscribeCheckbox={onCheckSubscribeCheckbox} checkedSubscribeCheckbox={checkedSubscribeCheckbox} subscribes={subscribes} item={item} onClickChangeSubscribe={onClickChangeSubscribe} {...currentSubscribe} />
      <SubscribePopupSelect checkedSubscribeSelect={checkedSubscribeSelect} onCheckSubscribeSelect={onCheckSubscribeSelect} subscribes={subscribes} item={item} />
    </div>
  );
}

export default SubscribePopupItem;