import { connect } from "react-redux";
import { selectSliceFromState } from "../datastructures";

export const connectToDataAndEvents = (component, options) => {
  return connect(
    component,
    state => selectSliceFromState(state, ""),
    dispatch => {
      return {};
    }
  );
};
