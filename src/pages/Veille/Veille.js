import React, { useState } from "react";
import Technologique from "./Popup/Technologique";
import Juridique from "./Popup/Juridique";

export default function Veille() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const items = [
    {
      title: "Technologique",
      image: "/Technologique.png",
      content: <Technologique />,
    },
    {
      title: "Juridique",
      image: "/Juridique.png",
      content: <Juridique />,
    },
  ];

  const openPopup = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
  };

  return (
    <div className="relative flex flex-col items-center">
      <h1 className="text-[#081c15] text-center font-sans text-4xl font-bold mt-8">
        Veille
      </h1>
      <div className="flex flex-wrap justify-center mt-12 space-x-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative w-80 h-48 cursor-pointer flex flex-col items-center justify-center"
            onClick={() => openPopup(item.content)}
          >
            <div className="absolute inset-0 rounded-lg border-2 border-[#081c15]"></div>
            <div className="text-[#081c15] text-xl font-medium">
              {item.title}
            </div>
            <img
              className="w-10 h-10 mt-2"
              src={`${process.env.PUBLIC_URL}${item.image}`}
              alt={item.title}
            />
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto relative">
            <button
              className="absolute top-4 right-4 text-2xl font-bold"
              onClick={closePopup}
            >
              ×
            </button>
            <div className="text-lg">{popupContent}</div>
          </div>
        </div>
      )}
    </div>
  );
}