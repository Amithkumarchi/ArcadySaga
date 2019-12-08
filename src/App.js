import React from "react";
import { createStore, applyMiddleware } from "redux";
import reducer from "./redux/Reducer";
import thunk from "redux-thunk";
import Child from "./Child";
import { Provider } from "react-redux";
//first we are using createstore to create store
// if  we are not using reducer function it will
//complain.
// here we are creating array because there may be
// addition of different middleware in future
const middleWare = [thunk];
// we need to add thunk middle ware here and
// pass it in create store
const store = createStore(reducer, applyMiddleware(...middleWare));

const App = () => {
  // we need to use dispatch to dispatch actions
  //from component to store
  // component->dispatch(action which is object)
  //->reducer it take (state and action)->
  // it will take dispatch
  return (
    <Provider store={store}>
      <Child />
    </Provider>
  );
};

export default App;
