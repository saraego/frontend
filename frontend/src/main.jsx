import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import Routes from "./routes/routes";
import StyleGlobal from "./styles/styleGlobal";
import AppProvider from "./hooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyleGlobal />
    <ToastContainer autoClose={1900} />
    <AppProvider>
      <Routes />
    </AppProvider>
  </React.StrictMode>
);
