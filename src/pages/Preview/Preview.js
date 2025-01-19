import React from 'react';
import ButtonComponent from '../../Components/Common/Button/ButtonComponent';

export default function Preview() {
    return (
        <div className="relative p-6 space-y-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex-1 space-y-4 md:space-y-6">
                    <h1 className="text-left font-sans text-3xl md:text-5xl font-normal">
                        FLORES DA COSTA
                        <br />
                        Kevyn
                    </h1>
                    <div className="text-lg md:text-2xl space-y-2">
                        <p>Etudiant à EPSI Lyon</p>
                        <p>Bienvenue sur mon Portfolio !</p>
                    </div>
                    <div className="mt-4 md:mt-6">
                        <ButtonComponent 
                            label="Contactez Moi" 
                            icon={`${process.env.PUBLIC_URL}/send.png`} 
                            iconName="Envoyer"
                            actionType="navigate" 
                            actionValue="#footer" 
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img
                        className="rounded-full w-48 h-48 md:w-80 md:h-80 object-cover border-4 border-[#081C15]"
                        src={`${process.env.PUBLIC_URL}/photoCV.JPG`} 
                        alt="Flores da Costa Kevyn"
                    />
                </div>
            </div>
        </div>
    );
}