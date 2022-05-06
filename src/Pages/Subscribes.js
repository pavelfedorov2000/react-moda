import axios from 'axios';
import React, { useState } from 'react';
import { SubscribeItem, SubscribePopup } from '../Components';

function Subscribes() {

  const [subscribes, setSubscribes] = useState([]);

  React.useEffect(() => {
    axios.get('/subscribes').then(({ data }) => {
      setSubscribes(data);
    });
  }, []); // [] = componentDidMout
  console.log(subscribes);

  const [visibleSubscribePopup, setVisibleSubscribePopup] = useState(null);

  const onSubscribePopupOpen = (i) => {
    setVisibleSubscribePopup(i);
    console.log(visibleSubscribePopup);
  }

  return (
    <>
      <div className="profile-subscribes">
        {subscribes.map((subscribe, i) => (
          <SubscribeItem handlerSubscribePopup={onSubscribePopupOpen} key={`subscribe-${i + 1}`} {...subscribe} />
        ))}
        <div className="profile-subscribes__item subscribe-item profile-subscribes__item--aside">
          <h4 className="subscribe-item__title">Модная рассылка раз в неделю</h4>
          <div className="subscribe-item__content">
            <div className="subscribe-item__email">На почту past@mail.ru</div>
            <button className="btn subscribe-item__btn" type="button">Подписаться</button>
          </div>
        </div>
      </div>
      {visibleSubscribePopup !== null &&
        <div className="overlay">
          <SubscribePopup title={subscribes[visibleSubscribePopup].title} />
        </div>
      }
    </>
  );
}

export default Subscribes;