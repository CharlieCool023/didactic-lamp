'use client'
import appScreen from "../assets/images/app-screen.png";
import Image from "next/image"
import {motion, useScroll, useTransform} from "framer-motion"
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
 
  const {scrollYProgress} = useScroll({
    target: appImage,
    offset: ["start end", "end end"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);


  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] py-24 text-center sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold sm:text-6xl tracking-tighter ">Intuitive interface</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
          Verify product authenticity with blockchain technology and a user-friendly interface. <br /> Ensuring product transparency and build consumer trust.
          </p>
        </div>
        <motion.div 
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "800px",
        }}
        >
        <Image 
        src={appScreen}
        alt="The Product screenshot"
        className="mt-14 mx-auto"
        ref={appImage}
        />
        </motion.div>
      </div>
    </div>
  );
};
