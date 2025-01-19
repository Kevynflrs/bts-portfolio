import React from "react";
import "./index.css";
import Head from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./pages/Footer/Footer";

export const metadata = {
  title: "Flores Kevyn - Portfolio",
  description: "Portfolio de Flores Kevyn",
};

function App() {

  return (
    <>
      <div>
        <Head />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
