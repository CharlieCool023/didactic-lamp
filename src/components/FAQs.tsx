'use client'
import React from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import {AnimatePresence, motion} from "framer-motion";

const items = [
  {
    question: "How can I use this app to verify a product?",
    answer:
      "To verify a product, simply scan the product's QR code using the app's built-in scanner. The app will then retrieve the product's information from the blockchain and display it for you to review. You can verify the product's authenticity by comparing the information on the blockchain with the product's physical attributes.",
  },
  {
    question: "How can producers add their products to the platform?",
    answer:
      "Producers can add their products to the platform by creating a product profile and generating a unique product ID. To add products, producers must have a blockchain wallet. If you don't have one, the app will guide you through the steps to create one. Once you have a wallet, you can easily add your products and generate their unique IDs.",
  },
  {
    question: "How does the app generate unique product IDs?",
    answer:
      "The app utilizes blockchain technology to generate unique and tamper-proof product IDs. When a producer adds a product, the app creates a digital record of the product's information on the blockchain. This record includes a unique ID that is linked to the product, ensuring its authenticity and traceability.",
  },
  {
    question: "What are the benefits of blockchain-based product verification?",
    answer:
      "Blockchain-based product verification offers several benefits, including enhanced transparency, improved security, reduced counterfeiting, and increased consumer trust. By providing a secure and immutable record of product information, blockchain technology helps to establish trust and authenticity throughout the supply chain.",
  },
];

const AccordionItem = ({ question, answer }:{question: string, answer: string}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">
          {question}
        </span> 
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
        initial={{opacity:0, height: 0, marginTop: 0}} 
        animate={{opacity:1, height: "auto",marginTop: "16px"}} 
        exit={{opacity: 0, height: 0, marginTop: 0}}>
        {answer}
      </motion.div>
      )}
      </AnimatePresence>
        
    </div>
  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CAB] to-black py-[72px] py-24 sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold sm:text-6xl sm:max-w-[648px] mx-auto tracking-tighter" id="faq">Frequently asked questions</h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
