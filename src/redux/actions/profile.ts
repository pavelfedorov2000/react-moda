import { ActionType } from "../actionsList";

interface Input {
    name: string;
    value: string;
}

interface SmallPopup {
    name: string;
    title: string;
}

export const setProfileData = ({ name, value }: Input) => ({
    type: ActionType.SetProfileData,
    payload: { name, value }
});

export const openProfileEditPopup = ({ name, title }: SmallPopup) => ({
    type: ActionType.OpenEditProfilePopup,
    payload: { name, title }
});

export const closeProfileEditPopup = () => ({
    type: ActionType.CloseProfileEditPopup,
});

export const setProfileDataUpdated = (updated: boolean) => ({
    type: ActionType.SetProfileDataUpdated,
    payload: updated
});