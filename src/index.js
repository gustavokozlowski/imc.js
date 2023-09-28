import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '../src/index.css'
import { ModalProvider } from "styled-react-modal";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ModalProvider>
      <Header />
      <App />
    </ModalProvider>
  </BrowserRouter>
);
