import { combineReducers, Reducer } from "redux";

import { CounterAction, CounterActionType } from "../actions/counter";
import { IRootState, ICounterState } from "../stores";

const initCounterState: ICounterState = {
  count: 0
};

// Todoで発生するactionに対応してReduxのstateを返すReducerを作成
const reducer: Reducer<ICounterState> = (
  state = initCounterState,
  action: CounterAction
): ICounterState => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case CounterActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };

    case CounterActionType.ADD_NUMBER:
      console.log(action);
      const addNumberAction = action;

      return {
        ...state,
        count: state.count + addNumberAction.payload
      };

    default:
      return state;
  }
};

export const counterReducer: Reducer<IRootState> = combineReducers({
  counterState: reducer
});
