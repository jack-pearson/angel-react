import React, { useState } from "react";
import Icon from "./components/Icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  return (
    <div className="App">
      123
      <Icon icon="ad" />
    </div>
  );
}

export default App;
