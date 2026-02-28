"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingButton() {
    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">

            <div
                className="bg-white px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-2xl rounded-br-none border border-[#EAE7E2] animate-bounce-slow"
                data-aos="fade-left"
                data-aos-delay="1500"
            >
                <span className="text-[#1C1C1C] text-[10px] tracking-[0.2em] uppercase font-medium whitespace-nowrap">
                    Olá! Como podemos ajudar?
                </span>
            </div>

            <a
                href="https://wa.me/5561982057395"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
            >
                <div className="absolute inset-0 bg-[#C6A75E] rounded-full animate-ping opacity-25"></div>

                <div className="relative flex items-center justify-center w-16 h-16 bg-[#C6A75E] text-white rounded-full shadow-[0_15px_40px_rgba(198,167,94,0.4)] transition-all duration-500 group-hover:bg-[#1C1C1C] group-hover:scale-110">
                    <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
                </div>
            </a>
        </div>
    );
}