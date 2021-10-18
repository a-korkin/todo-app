import { Dispatch } from "redux"
import { ActionType } from "../action-types";

export const addItem = (payload: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.ADD_ITEM,
            payload: payload
        });
    }
}

export const removeItem = (payload: string) => {
    return async(dispatch: Dispatch) => {
        dispatch({
            type: ActionType.REMOVE_ITEM,
            payload: payload
        });
    }
}