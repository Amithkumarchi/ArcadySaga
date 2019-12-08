// reducers are nothing but
// which will take state and actions
// returns new state
// we have combine reducers
import types from "./Constant";

const reducers = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case types.TOTAL: {
      return action.payload;
    }
    default: {
      return {};
    }
  }
};

export default reducers;
