import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { rootReducer } from './reducer.redux';

export interface RootState {
    ClickCounts: number[];
}

export const initialState: RootState = {
    // element zero is reserved
    // element 1 is page 1
    // element 2 is page 2
    ClickCounts: [-1, 0, 0],
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
