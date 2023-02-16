import { ActionType } from "../actionsList";

export const setCategory = (index: number) => ({
    type: ActionType.SetCategory,
    payload: index
});