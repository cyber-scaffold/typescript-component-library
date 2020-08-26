import React from "react";
import ReactDOM from "react-dom";

import TestButton from "../dist/TestButton/index.js";

console.log(TestButton);

ReactDOM.render((
  <TestButton>
    测试按钮
  </TestButton>
), document.getElementById("root"));