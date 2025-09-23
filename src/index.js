/* ────────────────────────────────────────────── */
/*  src/index.js –  React entry file             */
/* ────────────────────────────────────────────── */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/*  i18n must be imported **before** <App /> so that
    react-i18next hooks already have an initialised
    instance when the component tree is rendered.   */
import "./i18n";

/* Global styles (Tailwind + your own rules)       */
import "./styles/global.css";

import App from "./App";

/* Example of any context providers you use        */
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
