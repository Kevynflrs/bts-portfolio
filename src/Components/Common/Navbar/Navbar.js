import React from 'react';

export default function Navbar() {
  return (
    <div className="sticky top-0 h-24 flex items-center justify-between px-4 md:px-16 bg-white shadow-md">
      <a href='/' className="text-2xl font-bold">Mon Portfolio</a>
      <div className="hidden md:flex space-x-8">
        <a href='#preview'>Profil</a>
        <div>Tableau de synthèse</div>
        <div>Compétences</div>
        <div>Expériences</div>
        <div>Veille</div>
        <div>Projets</div>
        <div>Contact</div>
      </div>
      <div className="flex items-center space-x-4">
        <img src={`${process.env.PUBLIC_URL}/moon.png`} alt="toggle to dark theme" className="w-8 h-8" />
        <button className="md:hidden text-[#081C15] text-2xl">☰</button>
      </div>
    </div>
  );
}