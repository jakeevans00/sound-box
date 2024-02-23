import ReactDOM from "react-dom/client";
// import React from "react";
import App from "./App.jsx";
import "./index.css";
import Store from "./utils/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Store>
    <App />
  </Store>
  //  </React.StrictMode>
);
