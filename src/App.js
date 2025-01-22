import React from "react";
import "./index.css";
import Header from "./pages/Header/Header";
import Profile from "./pages/Profile/Profile";
import TableauSynthese from "./pages/TableauSynthese/TableauSynthese";
import Competences from "./pages/Compétences/Competences";
import Footer from "./pages/footer/footer";

function App() {

  return (
    <>
      <Header />
      <Profile />
      <TableauSynthese />
      <Competences />
      <Footer />
    </>
  );
}

export default App;
