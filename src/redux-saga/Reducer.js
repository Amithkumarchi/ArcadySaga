// reducers are nothing but
// which will take state and actions
// returns new state
// we have combine reducers
import types from "./Constant";

const reducers = (state = {}, action) => {
  console.log("the action", action);
  switch (action.type) {
    case types.DATA: {
      return action.payload;
    }
    default: {
      return {};
    }
  }
};

export default reducers;
