// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IS_DEV, ENABLE_MOCKED_SERVER } from "./config";
import { mockServer, mockHandlers } from "./mockedServer";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

if (IS_DEV && ENABLE_MOCKED_SERVER) mockServer(mockHandlers);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);

reportWebVitals();
