import React from 'react';

export default function TableauSynthese() {
  return (
    <section id='#tableau' className="container mx-auto p-4 lg:p-10">
      <div className="flex flex-col max-w-[1280px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 lg:mb-12 text-center">
          Tableau de synthèse
        </h1>
        <div className="flex flex-col items-center lg:items-start space-y-8 mb-8 lg:mb-0">
          <img
            src={`${process.env.PUBLIC_URL}/Pro/tableau.png`} 
            alt="Tableau de synthèse"
          />
        </div>
      </div>
    </section>
  );
}