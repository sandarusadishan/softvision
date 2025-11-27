import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import React from "react";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Smoothly remove the pre-loader
const loader = document.getElementById("loader");
if (loader) {
  loader.classList.add("fade-out");
  loader.addEventListener("transitionend", () => loader.remove());
}
