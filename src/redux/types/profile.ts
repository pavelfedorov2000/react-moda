import { ProfileData } from "../../enums/Auth";
import { ActionType } from "../actionsList";

export interface ProfileState {
    [ProfileData.NAME]: string;
    [ProfileData.SURNAME]: string;
    [ProfileData.PHONE]: string;
    [ProfileData.EMAIL]: string;
    [ProfileData.PASSWORD]: string;
    [ProfileData.REPEAT_PASSWORD]: string;
    [ProfileData.GENDER]: string;
    editPopup: {
        isVisible: boolean,
        name: string,
        title: string
    },
    isUpdated: boolean,
}

interface SetPersonalDataAction {
    type: ActionType.SetProfileData;
    payload: any;
}

interface OpenProfileEditPopupAction {
    type: ActionType.OpenEditProfilePopup;
    payload: {name: string, title: string};
}

interface CloseProfileEditPopupAction {
    type: ActionType.CloseProfileEditPopup;
}

interface SetProfileDataUpdatedAction {
    type: ActionType.SetProfileDataUpdated;
    payload: boolean;
}

export type ProfileAction = SetPersonalDataAction | OpenProfileEditPopupAction | CloseProfileEditPopupAction | SetProfileDataUpdatedAction;