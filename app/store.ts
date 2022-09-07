import { Stroller } from '@mui/icons-material';
import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit';
import rootReducer from './root-reducer';


export function makeStore() {
    return configureStore({
        reducer: rootReducer
    });
}

const store=makeStore();
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
AppState,
unknown,
Action<string>
>;

export default store;