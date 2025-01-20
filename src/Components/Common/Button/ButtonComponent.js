import React from 'react';
import PropTypes from 'prop-types';

/**
 * ButtonComponent - Un bouton personnalisable qui prend en charge soit le téléchargement d'un fichier, soit la navigation vers une URL.
 * 
 * @param {string} label - Le texte affiché sur le bouton.
 * @param {React.Element} icon - L'icône affichée à côté du texte.
 * @param {string} iconName - Le nom de l'icone.
 * @param {string} actionType - Le type d'action : 'download' ou 'navigate'.
 * @param {string} actionValue - L'URL ou le chemin du fichier pour l'action.
 */
export default function ButtonComponent({ label, icon, iconName, actionType, actionValue }) {

    ButtonComponent.propTypes = {
        label: PropTypes.string.isRequired,
        icon: PropTypes.element,
        iconName: PropTypes.string,
        actionType: PropTypes.oneOf(['download', 'navigate']).isRequired,
        actionValue: PropTypes.string.isRequired,
    };


    const handleClick = () => {
        if (actionType === 'download') {
            const link = document.createElement('a');
            link.href = actionValue;
            link.download = actionValue.split('/').pop();
            link.click();
        } else if (actionType === 'navigate') {
            window.location.href = actionValue;
        } else {
            console.warn('Unsupported action type');
        }
    };

    return (
        <button onClick={handleClick} className="w-full bg-[#081C15] text-[#FBFBFE] px-4 py-2 rounded-lg flex items-center justify-center lg:justify-between shadow-md hover:bg-[#0a2a1b] transition duration-300">
            <span className="text-xl md:text-2xl lg:text-3xl">{label}</span>
            {icon && (
                <img src={icon} alt={iconName} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 ml-2" />
            )}
        </button>
    );
};