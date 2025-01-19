import React from 'react';

export default function Navbar() {
  return (
    <div className="sticky top-0 h-24 flex items-center justify-between px-4 md:px-16 shadow-md">
      <a href="/" className="text-3xl font-bold">Mon Portfolio</a>
      <div className="hidden md:flex space-x-12">
        <div className="text-xl">Profil</div>
        <div className="text-xl">Tableau de synthèse</div>
        <div className="text-xl">Compétences</div>
        <div className="text-xl">Expériences</div>
        <div className="text-xl">Veille</div>
        <div className="text-xl">Projets</div>
        <div className="text-xl">Contact</div>
      </div>
      <div className="flex items-center space-x-6">
        <img src={`${process.env.PUBLIC_URL}/moon.png`} alt="toggle to dark theme"/>
      </div>
    </div>
  );
}