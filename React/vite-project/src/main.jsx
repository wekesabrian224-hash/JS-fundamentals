import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import AmazonPage from "./AmazonPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AmazonPage />
  </StrictMode>,
);
