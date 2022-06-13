import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubscribeItem, SubscribePopup } from '../Components';
import { fetchSubscribes, cancelSubscribe } from '../redux/actions/subscribes';

function Subscribes() {

  const dispatch = useDispatch();
  const subscribes = useSelector(({ subscribes }) => subscribes.subscribes); // вытаскиваем подписки из стора
  //console.log(subscribes);

  // Экшн на отмену подписки
  const handleCancelSubscribe = (id) => {
    dispatch(cancelSubscribe(id));
  }

  // Экшн на изменение подписок
  const handleChangeSubscribe = (obj) => {
    dispatch({
      type: 'CHANGE_SUBSCRIBE',
      payload: obj
    });
  }

  React.useEffect(() => {
    dispatch(fetchSubscribes()); // вернет функцию
  }, []); // [] = componentDidMout

  //const [subscribes, setSubscribes] = useState([]);

  const [visibleSubscribePopup, setVisibleSubscribePopup] = useState(null);

  const onSubscribePopupOpen = (i) => {
    setVisibleSubscribePopup(i);
    console.log(visibleSubscribePopup);
  }

  const onCloseSubscribePopup = () => {
    setVisibleSubscribePopup(null);
  }

  return (
    <>
      <div className="profile-subscribes">
        {subscribes.length !== 0 ?
          subscribes.map((subscribe, i) => (
            <SubscribeItem onClickUnsubscribe={handleCancelSubscribe} handlerSubscribePopup={onSubscribePopupOpen} index={i} key={subscribe.id} {...subscribe} />
          )) :
          <div>Нет активных подписок!</div>
        }
        <div className="profile-subscribes__item subscribe-item profile-subscribes__item--aside">
          <h4 className="subscribe-item__title">Модная рассылка раз в неделю</h4>
          <div className="subscribe-item__content">
            <div className="subscribe-item__email">На почту past@mail.ru</div>
            <button className="btn subscribe-item__btn" type="button">Подписаться</button>
          </div>
        </div>
      </div>
      {visibleSubscribePopup !== null &&
        <div className="overlay active">
          <SubscribePopup onChangeSubscribe={handleChangeSubscribe} currentSubscribe={subscribes[visibleSubscribePopup]} subscribes={subscribes[visibleSubscribePopup].items} onCloseSubscribePopup={onCloseSubscribePopup} {...subscribes[visibleSubscribePopup]} />
        </div>
      }
    </>
  );
}

export default Subscribes;