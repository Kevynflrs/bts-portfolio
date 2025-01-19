import React from "react";

export default function Head() {
    return (
        <div className="flex items-center justify-center space-x-48 h-16 text-2xl opacity-90 border-b border-b-black bg-[#d5d1de]">
            <button>
                à propos
            </button>
            <button>
                Tableau de synthèse
            </button>
            <button>
                Compétences
            </button>
            <button>
                Projets
            </button>
            <button>
                Expériences
            </button>
            <button>
                Veille
            </button>
            <a href="#Contact">
                Contact
            </a>
        </div>
    );
}
