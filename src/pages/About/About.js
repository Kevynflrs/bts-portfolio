import React from 'react';

export default function AboutSection() {
  return (
    <>
      <div className='h-24 flex items-center justify-center space-x-16 font-[#081C15] text-2xl'>
        <div>Profil</div>
        <div>Tableau de synthèse</div>
        <div>Compétences</div>
        <div>Expériences</div>
        <div>Veille</div>
        <div>Projets</div>
        <div>Contact</div>
        <img src={`${process.env.PUBLIC_URL}/moon.png`} alt='toogle to dark theme'></img>
        <hr></hr>
      </div>
    </>
  );
};