import React from "react";
import { createStore, applyMiddleware } from "redux";
import reducer from "./redux-saga/Reducer";
import watcher from "./redux-saga/Saga";
import thunk from "redux-thunk";
import Child from "./Child";
import { Provider } from "react-redux";
//since redux saga is also a middleware
import createSagaMiddleware from "redux-saga";
// this saga is like watcher for every dispatch
//action so we need to pass callback function here

const saga = createSagaMiddleware();

//first we are using createstore to create store
// if  we are not using reducer function it will
//complain.
// here we are creating array because there may be
// addition of different middleware in future
const middleWare = [thunk, saga];
// we need to add thunk middle ware here and
// pass it in create store
const store = createStore(reducer, applyMiddleware(...middleWare));
saga.run(watcher);
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
