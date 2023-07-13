import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";

import { ThemeProvider } from "app/providers/ThemeProviders";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
