import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContextProvider from "./Context/Context.jsx";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
