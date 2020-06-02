import React from "react";
import ReactDOM from "react-dom";
import App from './src/app'

// render component when FSBL is ready.
const FSBLReady = () => {
  ReactDOM.render(
    <App />,
    document.getElementById("FDC3Tester-component-wrapper")
  );
};

if (window.FSBL && FSBL.addEventListener) {
  FSBL.addEventListener("onReady", FSBLReady);
} else {
  window.addEventListener("FSBLReady", FSBLReady);
}
