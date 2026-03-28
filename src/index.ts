import { createRoot } from "react-dom/client";
import { createElement } from "react";
import App from "./app/App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(createElement(App));
