import { Subscribe } from "../../interfaces/Subscribe";
import { ActionType } from "../actionsList";

export interface SubscribesState {
    subscribes: Subscribe[];
    isPopupVisible: boolean;
    currentSubscribe?: Subscribe;
}

interface SetSubscribesAction {
    type: ActionType.SetSubscribes;
    payload: Subscribe[];
}

interface ChangeSubscribeAction {
    type: ActionType.ChangeSubscribe;
    payload: string;
}

interface SubmitSubscribeAction {
    type: ActionType.SubmitSubscribe;
}

interface CancelSubscribeAction {
    type: ActionType.CancelSubscribe;
    payload?: number;
}

interface OpenSubscribeAction {
    type: ActionType.OpenSubscribe;
    payload?: number;
}

interface CloseSubscribeAction {
    type: ActionType.CloseSubscribe;
}

export type SubscibesAction =
    SetSubscribesAction
    | ChangeSubscribeAction
    | SubmitSubscribeAction
    | CancelSubscribeAction
    | OpenSubscribeAction
    | CloseSubscribeAction;