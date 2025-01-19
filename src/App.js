import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>
          Je suis Kevyn FLORES DA COSTA, un étudiant en informatique passionné !
        </p>
        <nav>
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="about">
        <h2>À propos de moi</h2>
        <p>Actuellement étudiant en 2ème année à EPSI/WIS Lyon, je développe mes compétences en développement web et logiciel.</p>
      </section>
      <section id="projects">
        <h2>Mes Projets</h2>
        <ul>
          <li>Projet 1 - Description</li>
          <li>Projet 2 - Description</li>
        </ul>
      </section>
      <footer id="contact">
        <h2>Contactez-moi</h2>
        <p>Email : kevyn@example.com</p>
      </footer>
    </div>
  );
}

export default App;
