import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routing from "./Routing/Index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
);
