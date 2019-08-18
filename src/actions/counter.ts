import { Action } from "redux";

export enum CounterActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  ADD_NUMBER = "ADD_NUMBER"
}

export interface IIncrementAction extends Action {
  type: CounterActionType.INCREMENT;
}

export interface IDecrementAction extends Action {
  type: CounterActionType.DECREMENT;
}

export interface IAddNumberAction extends Action {
  type: CounterActionType.ADD_NUMBER;
  payload: number;
}

export type CounterAction =
  | IIncrementAction
  | IDecrementAction
  | IAddNumberAction;

export interface ICounterActionCreator {
  incrementCounterAction(): IIncrementAction;
  decrementCounterAction(): IDecrementAction;
  addNumberCounterAction(payload: number): IAddNumberAction;
}

class CounterActionCreator implements ICounterActionCreator {
  public incrementCounterAction: ICounterActionCreator["incrementCounterAction"] = () => ({
    type: CounterActionType.INCREMENT
  });
  public decrementCounterAction: ICounterActionCreator["decrementCounterAction"] = () => ({
    type: CounterActionType.DECREMENT
  });
  public addNumberCounterAction: ICounterActionCreator["addNumberCounterAction"] = payload => ({
    payload,
    type: CounterActionType.ADD_NUMBER
  });
}

export const counterActionCreator: ICounterActionCreator = new CounterActionCreator();
