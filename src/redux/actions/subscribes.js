import axios from 'axios';

export const fetchSubscribes = () => (dispatch) => {
    axios.get('/subscribes').then(({ data }) => {
        dispatch(setSubscribes(data));
    });
};

export const setSubscribes = (subscribes) => ({
    type: 'SET_SUBSCRIBES',
    payload: subscribes
});

export const changeSubscribes = (subscribeObj) => ({
    type: 'CHANGE_SUBSCRIBE',
    payload: subscribeObj
});

export const cancelSubscribe = (id) => ({
    type: 'CANCEL_SUBSCRIBE',
    payload: id
});