import { Item } from "../../models/item";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface TodoState {
    items: Item[];
}

const initialState: TodoState = {
    items: []
}

const itemsReducer = (state: TodoState = initialState, action: Action): TodoState  => {
    switch (action.type) {
        case ActionType.ADD_ITEM:
            return { ...state, items: [...state.items, action.payload] };
        case ActionType.REMOVE_ITEM:
            return { ...state, items: [...state.items.slice(0, state.items.findIndex(a => a.id === action.payload)), ...state.items.slice(state.items.findIndex(a => a.id === action.payload) + 1)] };
        default:
            return state;
    }
}

export default itemsReducer;
