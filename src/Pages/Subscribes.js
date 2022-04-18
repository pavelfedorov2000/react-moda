import axios from 'axios';
import React, { useState } from 'react';
import { SubscribeItem } from '../Components';

function Subscribes() {

  const [subscribes, setSubscribes] = useState([]);

  React.useEffect(() => {
    axios.get('/subscribes').then(({ data }) => {
      setSubscribes(data);
    });
  }, []); // [] = componentDidMout

  return (
    <div className="profile-subscribes">
      {subscribes.map((subscribe, i) => (
        <SubscribeItem key={`subscribe-${i + 1}`} title={subscribe.title} items={subscribe.items} />
      ))}
      <div className="profile-subscribes__item subscribe-item profile-subscribes__item--aside">
        <h4 className="subscribe-item__title">Модная рассылка раз в неделю</h4>
        <div className="subscribe-item__content">
          <div className="subscribe-item__email">На почту past@mail.ru</div>
          <button className="btn subscribe-item__btn" type="button">Подписаться</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribes;