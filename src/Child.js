import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "./redux/Actions";

const Child = () => {
  const dispatch = useDispatch();
  const val = useSelector(state => state.total);
  const handleVal = () => {
    //generally we need to pass action object
    // in dispatch but as we are dealing with async
    // calls we are going to use redux thunk so that
    // rather than passing object we are going to pass
    // function which is dispatch itself
    dispatch(fetchData);
  };

  // we need to use dispatch to dispatch actions
  //from component to store
  // component->dispatch(action which is object)
  //->reducer it take (state and action)->
  // it will take dispatch
  return (
    <div>
      {val}
      <button onClick={handleVal}>Click</button>
    </div>
  );
};

export default Child;
