'use client';
import ArrowIcon from '../assets/icons/arrow-w.svg';
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import Image from "next/image"
import { motion } from 'framer-motion';


export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg-h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a href="#" className="inline-flex items-center gap-3 border py-1 px-2 rounded-lg border-white/30">
            <span  contentEditable="true" className="bg-[linear-gradient(to_right,#f87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] bg-clip-text text-transparent [-webkit-background-clip:text]">
              Version 2.0 is coming
            </span>
            <span className='inline-flex items-center gap-1'>
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className='flex justify-center mt-8'>
          <div className="inline-flex relative">
            <h1 className='text-7xl sm:text-7xl  lg:text-8xl font-bold tracking-tighter text-center inline-flex'>
              Blockchain <br /> 
               Product <br /> 
               Verification
            </h1>
          <motion.div className="absolute right-[476px] top-[108px] hidden sm:inline" drag dragSnapToOrigin >
            <Image src={cursorImage} alt="" height="200" width="200" className='max-w-none' draggable='false'/>
          </motion.div>

          <motion.div className='absolute top-[56px] left-[498px] hidden sm:inline' drag dragSnapToOrigin>
            <Image src={messageImage} alt="" height="200" width="200" className='max-w-none' draggable='false'/>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className='text-center text-xl mt-8 max-w-md mx-auto'>
          Verify your products, build trust. <br/> Elevate your brand with <span className='font-bold'>blockchain-powered verification</span>, ensuring authenticity and transparency for your customers.
          </p>
        </div>
        <div className='flex justify-center mt-8'>
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Get Started</button>
        </div>
      </div>
      
    </div>
  );
};
