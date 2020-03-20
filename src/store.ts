import { PageActionTypes, IncreasePageCountAction } from "./reducer"
import { createStore } from "redux";

export interface StoreType {
    page1Count: number;
    page2Count: number;
}

const initialState: StoreType = {
    page1Count: 0,
    page2Count: 0,
}

const rootReducer = (state = initialState, action: IncreasePageCountAction): StoreType => {
    let newState = state;
    switch (action.type) {
        case PageActionTypes.INCREASE_PAGE1COUNT:
            newState = {...state, page1Count: state.page2Count + 1};
            break;
        case PageActionTypes.INCREASE_PAGE2COUNT:
            newState = {...state, page1Count: state.page2Count + 1};
            break;
    }

    return newState;
}

export const store = createStore(rootReducer);
