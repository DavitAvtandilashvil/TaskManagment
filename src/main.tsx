import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ManagmentContextProvider } from "./context/ManagmentContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ManagmentContextProvider>
      <App />
    </ManagmentContextProvider>
  </StrictMode>
);
