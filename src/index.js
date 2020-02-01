import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/css/index.css";
import registerServiceWorker from "./registerServiceWorker";
import Routes from "./routes/routes";

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
