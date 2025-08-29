import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastProvider } from "./components/Toast/ToastProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppWrapper = (
    <ToastProvider>
        <App />
    </ToastProvider>
);

if (process.env.REACT_APP_NODE === "DEV") {
  root.render(<React.StrictMode>{AppWrapper}</React.StrictMode>);
} else {
  root.render(AppWrapper);
}
