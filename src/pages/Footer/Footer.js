import React from "react";

export default function Footer() {
    return (
        <div id="Contact" className="relative  bg-[#d5d1de] w-full h-[153px] border-solid border-black border-t">
            <div id="Infos">
                <div>
                    <img
                        className="w-[32px] h-[32px] absolute left-10 top-[25px]"
                        src="/mail.png"
                        alt="Email"
                    />
                    <div className="text-[32px] absolute left-[86px] top-[25px] w-[521px] h-8">
                        kevyn.floresdacosta@outlook.com
                    </div>
                </div>
                <div className="">
                    <img
                        className="w-[32px] h-[32px] absolute left-10 top-24"
                        src="/phone.png"
                        alt="Phone"
                    />
                    <div className="text-[32px] absolute left-[86px] top-24 w-[278px] h-8">
                        +33 6 51 58 91 03
                    </div>
                </div>
            </div>

            <div id="social">
                <a href="https://github.com/Kevynflrs" target="_blank" rel="noopener noreferrer">
                    <img
                        className="w-[32px] h-[32px] absolute left-[2030px] top-[45px]"
                        src="/github.png"
                        alt="GitHub"
                        style={{ objectFit: 'cover' }}
                    />
                </a>
                <a href="https://www.linkedin.com/in/floreskevyn/" target="_blank" rel="noopener noreferrer">
                    <img
                        className="w-[32px] h-[32px] absolute left-[1910px] top-[45px]"
                        src="/linkedin.png"
                        alt="LinkedIn"
                        style={{ objectFit: 'cover' }}
                    />
                </a>
            </div>
        </div>
    );
}
