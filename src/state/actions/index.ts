import { Item } from "../../models/item";
import { ActionType } from "../action-types";

interface AddItemAction {
    type: ActionType.ADD_ITEM;
    payload: Item;
}

interface RemoveItemAction {
    type: ActionType.REMOVE_ITEM;
    payload: string;
}

export type Action = AddItemAction | RemoveItemAction;
  