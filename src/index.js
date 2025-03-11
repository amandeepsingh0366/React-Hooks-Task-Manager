import React from "react";
import ReactDOM from "react-dom/client"; // Use the new import
import App from "./App";
import './App.css';

// Create the root container
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app inside the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
