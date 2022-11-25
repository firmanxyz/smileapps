import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContentApp from "./views/ContentApp";

// styles ?

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ContentApp />
  </BrowserRouter>
);