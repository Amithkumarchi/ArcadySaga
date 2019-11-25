import React from "react";
import Gen from "../generators/Gen";
const App = () => {
  let gen = Gen;
  let value = gen().next().value;
  return (
    <div>
      sagacomponent{}
      {gen().next().value}
    </div>
  );
};

export default App;
