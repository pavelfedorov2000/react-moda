import axios from 'axios';
import { Dispatch } from 'redux';
import { SubPages } from '../../enums/Page';
import { Subscribe } from '../../interfaces/Subscribe';
import { ActionType } from '../actionsList';
import { SubscibesAction } from "../types/subscribes";

export const fetchSubscribes = () => {
    return async (dispatch: Dispatch<SubscibesAction>) => {
        const response = await axios.get(SubPages.Subscribes.path);
        dispatch({
            type: ActionType.SetSubscribes,
            payload: response.data,
        });
    }
};

export const setSubscribes = (subscribes: Subscribe[]) => ({
    type: ActionType.SetSubscribes,
    payload: subscribes
});

export const changeSubscribe = (text: string) => ({
    type: ActionType.ChangeSubscribe,
    payload: text
});

export const submitSubscribe = () => ({
    type: ActionType.SubmitSubscribe,
});

export const cancelSubscribe = (id?: number) => ({
    type: ActionType.CancelSubscribe,
    payload: id
});

export const openSubscribe = (id?: number) => ({
    type: ActionType.OpenSubscribe,
    payload: id
});

export const closeSubscribe = () => ({
    type: ActionType.CloseSubscribe,
});