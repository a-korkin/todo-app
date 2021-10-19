import { Dispatch } from "redux"
import { Item } from "../../models/item";
import { ActionType } from "../action-types";

export const addItem = (payload: Item) => {
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