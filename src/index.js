import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Formulario } from "./components/Formulario/Formulario";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Formulario />
    <Footer/>
  </>
);
