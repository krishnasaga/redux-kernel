import { createStore, combineReducers } from "redux";

export const createSpace = () => {
  let currentReducers = {
    init: (state = {}) => state
  };
  const reducer = combineReducers(currentReducers);
  const store = createStore(reducer);
  return {
    putSlice: ({ sliceName }) => {
      currentReducers[sliceName] = (state = {}) => {
        return state;
      };
      store.replaceReducer(combineReducers(currentReducers));
    },
    store
  };
};
