import { ProfileData } from "../../enums/Auth";
import { Genders } from "../../enums/Gender";
import { ActionType } from "../actionsList";
import { ProfileAction, ProfileState } from "../types/profile";

const initialState: ProfileState = {
    [ProfileData.NAME]: '',
    [ProfileData.SURNAME]: '',
    [ProfileData.PHONE]: '',
    [ProfileData.EMAIL]: '',
    [ProfileData.PASSWORD]: '',
    [ProfileData.REPEAT_PASSWORD]: '',
    GENDER: Genders.Woman,
    editPopup: {
        isVisible: false,
        name: '',
        title: ''
    },
    isUpdated: false,
};

const profileReducer = (state = initialState, action: ProfileAction): ProfileState => {
    switch (action.type) {
        case ActionType.SetProfileData: {
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        }
        case ActionType.OpenEditProfilePopup: {
            return {
                ...state,
                editPopup: {
                    isVisible: true,
                    name: action.payload.name,
                    title: action.payload.title
                }
            };
        }
        case ActionType.CloseProfileEditPopup: {
            return {
                ...state,
                editPopup: {
                    isVisible: false,
                    name: '',
                    title: ''
                }
            };
        }
        case ActionType.SetProfileDataUpdated: {
            return {
                ...state,
                isUpdated: action.payload
            };
        }
        default:
            return state;
    }
}

export default profileReducer;