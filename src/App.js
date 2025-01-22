import React from "react";
import "./index.css";
import Header from "./pages/Header/Header";
import Profile from "./pages/Profile/Profile";
import TableauSynthese from "./pages/TableauSynthese/TableauSynthese";
import Competences from "./pages/Compétences/Competences";
import Footer from "./pages/footer/footer";
import Experience from "./pages/Expériences/Experiences";

function App() {

  return (
    <>
      <Header />
      <div className="space-y-8 lg:space-y-16">
        <Profile />
        <TableauSynthese />
        <Competences />
        <Experience />
      </div>
      <Footer />
    </>
  );
}

export default App;
