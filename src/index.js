import React from "react";
import ReactDOM from "react-dom/client";
import { Baner, Navegacion, Contactbanner } from "./Header";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Navegacion />
    <Baner />
    <Contactbanner />
  </>
);
