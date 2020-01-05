import { createStore, combineReducers } from "redux";
import { createCollectionReducer, selectCollection } from "./datastructures";

export const createSpace = ({ namespace }) => {
  let currentReducers = {
    init: (state = {}) => state
  };
  const reducer = combineReducers(currentReducers);
  const store = createStore(reducer);
  return {
    putSlice: ({ sliceName }) => {
      if (typeof currentReducers[sliceName] !== "function") {
        currentReducers[`${namespace}_${sliceName}`] = createCollectionReducer({
          initialCollection: [],
          updateWhen: action =>
            action.type === `${namespace}_${sliceName}_UPDATED`,
          addWhen: action => action.type === `${namespace}_${sliceName}_ADDED`,
          removeWhen: action =>
            action.type === `${namespace}_${sliceName}_REMOVED`,
          enhancers: []
        });
      }
      store.replaceReducer(combineReducers(currentReducers));
    },
    store,
    addToCollection: ({ sliceName, entity }) => {
      store.dispatch({
        type: `${namespace}_${sliceName}_ADDED`,
        data: entity
      });
    },
    updateInCollection: ({ sliceName, entity }) => {
      store.dispatch({
        type: `${namespace}_${sliceName}_UPDATED`,
        data: entity
      });
    },
    removeFromCollection: ({ sliceName, entity }) => {
      store.dispatch({
        type: `${namespace}_${sliceName}_REMOVED`,
        data: entity
      });
    },
    collectionLoading: ({ sliceName, entity }) => {
      store.dispatch({
        type: `${namespace}_${sliceName}_LOADING`,
        data: entity
      });
    },
    collectionLoaded: ({ sliceName, entity }) => {
      store.dispatch({
        type: `${namespace}_${sliceName}_LOADED`,
        data: entity
      });
    },
    collectionAborted: ({ sliceName, entity }) => {
      store.dispatch({
        type: `${namespace}_${sliceName}_ABORTED`,
        data: entity
      });
    }
  };
};

export const selectSliceFromState = (state, sliceName) => {
  return selectCollection(state[sliceName]);
};
