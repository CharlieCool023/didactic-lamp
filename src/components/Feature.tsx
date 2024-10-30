
'tsx'
'use client'
import React, { useEffect } from 'react';
import EcosystemIcon from "../assets/icons/ecosystem.svg";

export const Feature = ({ title, description }: { title: string; description: string }) => {
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            // Add your logic here to handle mouse movements
            // For example, you can update the position of an element based on the mouse coordinates
            console.log('Mouse position:', e.clientX, e.clientY);
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <div className="border border-white/30 px-5 py-10 text-center rounded-xl relative sm:flex-1">
            <div className="absolute inset-0 border-2 border-purple/400 rounded-xl" style={{ maskImage: 'radial-gradient(100px at 0px 0px, black, transparent)' }}></div>
            <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                <EcosystemIcon />
            </div>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-2 text-white/70">{description}</p>
        </div>
    );
};
