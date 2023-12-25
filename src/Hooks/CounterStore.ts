import { useReducer } from "react";

type INCREMENTType = { type: "INCREMENT" };
type DECREMENTType = { type: "DECREMENT" };
type RESETType = { type: "RESET" };
type actionType = INCREMENTType | DECREMENTType | RESETType;

const Store = () => {
  const initialState = {
    count: 0,
  };
  const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET",
  };
  const reducer = (state: typeof initialState, action: actionType) => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      case ACTIONS.RESET:
        return { count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
export default Store;
