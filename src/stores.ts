import { Action, createStore, Store } from "redux";

import { counterReducer } from "./reducers/counter";

export interface ICounterState {
  count: number;
}

export interface IRootState {
  counterState: ICounterState;
}

export const store: Store<ICounterState, Action> = createStore(counterReducer);
