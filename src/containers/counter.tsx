import React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { counterActionCreator } from "../actions/counter";
import { IRootState } from "../stores";
import { Counter } from "./../components/Counter";

interface IStateToProps {
  count: number;
}

interface IDispatchToProps {
  increment: () => void;
  decrement: () => void;
  addNumber: (payload: number) => void;
}

type IProps = IStateToProps & IDispatchToProps;

const TodoContainer = (props: IProps) => {
  const { count, increment, decrement, addNumber } = props;
  // const handleAddNumber = useCallback((payload: number) => {
  //   console.log(payload);
  //   addNumber(payload);
  // }, []);

  return (
    <Counter
      count={count}
      onIncrement={increment}
      onDecrement={decrement}
      onAddNumber={addNumber}
    />
  );
};

// Storeが更新されたときに送られてくるStateを受け取り、
// IStateToPropsに変換して返す関数を定義
const mapStateToProps = (state: IRootState): IStateToProps => {
  const { counterState } = state;
  return {
    count: counterState.count
  };
};

// Dispatchを受け取り、IDispatchToPropsの関数でどのアクションをDispatchするのかを定義する
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    increment: () => {
      dispatch(counterActionCreator.incrementCounterAction());
    },
    decrement: () => {
      dispatch(counterActionCreator.decrementCounterAction());
    },
    addNumber: (paylaod: number) => {
      dispatch(counterActionCreator.addNumberCounterAction(paylaod));
    }
  };
};

// Storeが更新されたときの挙動が詰められたIStatePropsと、
// Storeを更新するためのメソッドが詰められたIDispatchToPropsをTodoContainerと繋ぎこむ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
