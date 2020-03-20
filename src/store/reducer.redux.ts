
import { initialState, RootState } from './store.redux';
import { IncreaseClickCountAction, ClickActionTypes } from "./actions.redux";

// too lazy to use combine reducers...
export const rootReducer = (state = initialState, action: IncreaseClickCountAction): RootState => {
    let newState = state;
    switch (action.type) {
        case ClickActionTypes.INCREASE_CLICKCOUNT:
            if (action.payload >= 1 && action.payload < state.ClickCounts.length) {
                // process when given id is within range
                newState = {...state};
                newState.ClickCounts = [...state.ClickCounts];
                newState.ClickCounts[action.payload] = state.ClickCounts[action.payload] + 1;
            }
            break;
    }

    return newState;
}