'tsx'
'use client'
import helixImage from "../assets/images/helix2.png";
import emojiStar from "../assets/images/emojistar.png";
import Image from "next/image";
import {useScroll, motion, useTransform} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Define animation values using useTransform
  const helixTranslateY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const emojiStarTranslateY = useTransform(scrollYProgress, [0, 1], [-120, 0]); 


  const handleButtonClick = () => {
    // Add your logic here when the button is clicked
    console.log("Button clicked!");
  };

  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center" ref={containerRef}>
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY: helixTranslateY }}> 
          <Image src={helixImage} alt="" className="absolute top-6 left-[calc(100%+36px)]" />
        </motion.div>
        <motion.div style={{ translateY: emojiStarTranslateY }}>
          <Image src={emojiStar} alt="" className="absolute -top-[120px] right-[calc(100%+24px)]" />
        </motion.div>
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter"> Get instant access</h2>
        <p className="text-xl mt-5 text-white/55">
        Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="your@email.com"  className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"/>
          <button className="bg-white text-black px-5 rounded-lg h-12" onClick={handleButtonClick}>Get access</button>
          
        </form>
      </div>
    </div>
  );
};
