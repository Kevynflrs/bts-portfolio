import React from 'react';

export default function AboutSection() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold p-2">A propos</h2>

      <div className='flex flex-row'>
        <div>
          <p className="text-xl font-medium p-5 basis-4/6">
            Bonjour et bienvenue sur mon portfolio.
            <br />
            Je m&apos;appelle Kevyn Flores Da Costa, j&apos;ai 19 ans et je suis originaire de Lyon.
            <br />
            <br />
            Étant passionné par l’informatique et les nouvelles technologies depuis de nombreuses années, je me suis
            naturellement dirigé vers un bac avec les spécialités NSI (Numérique Sciences Informatiques) et SI (Sciences
            de l’Ingénieur) au lycée.
            <br />
            <br />
            Après avoir obtenu le bac avec mention assez bien en 2023, j’ai intégré l’EPSI Lyon pour préparer un BTS SIO
            (Services Informatiques aux Organisations) option SLAM en parallèle d’un bachelor en intelligence artificielle
            au sein de la même école.
            <br />
            <br />
            En préparant ce BTS avec l’option SLAM (Solutions Logicielles et Applications Métiers), j&apos;ai pu approfondir mes
            connaissances en développement et découvrir de nouvelles technologies. J&apos;ai ainsi participé à plusieurs projets
            d&apos;équipe qui m&apos;ont permis de mettre en pratique mes compétences et de les enrichir.
            <br />
            Plus tard, j&apos;envisage de me spécialiser en développement d’intelligence artificielle.
            <br />
            <br />
            Après ces trois années, je souhaite préparer un diplôme d&apos;ingénieur ou équivalent, en poursuivant mes études par
            2 années d&apos;alternance.
            <br />
            <br />
            Je serai très heureux de pouvoir vous aider dans vos futurs projets.
            <br />
            Si vous souhaitez en savoir plus sur moi, mes compétences et mes différents projets, ou tout simplement savoir
            comment me contacter, n&apos;hésitez pas à explorer ce site.
            <br /> 
            Vous pouvez consulter mon CV et ma lettre de motivation
            grâce au bouton ci-dessous.
          </p>
          <div className="flex flex-row pl-5 space-x-6">
            <button className="w-20 h-12 font-medium rounded-full border border-black bg-[#d5d1de]">
              <a href="/CV.pdf" target='_blank'>
                CV
              </a>
            </button>
            <button className="w-48 h-12 font-medium rounded-full border border-black bg-[#d5d1de]">
              <a href="/LM.pdf" target='_blank'>
                Lettre de motivation
              </a>
            </button>
          </div>
        </div>

        <img
          className="w-[450px] h-[506px] basis-2/6"
          src="/photo.jpg"
          alt="Kevyn Flores Da Costa"
        />
      </div>
    </div>
  );
};