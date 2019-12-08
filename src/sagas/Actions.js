// this is for creating action creator
import types from "./Constant";
import axios from "axios";
//we are importing any dispatch this dispatch
//argument is called and configured using redux thunk
// middleware this is for asynchronous functions thats
// the reason we are using axios
export const fetchData = dispatch => {
  axios.get("https://reqres.in/api/users?page=2").then(res => {
    dispatch(actionCreator(types.TOTAL, res.data));
  });
};

const actionCreator = (type, payload) => {
  return {
    type,
    payload
  };
};
