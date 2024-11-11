
import { Feature } from "./Feature";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "We connect with your essential tools and data sources, simplifying the verification process and keeping everything in one place.",
  },
  {
    title: "Unbreakable Chain of Trust",
    description:
      "By generating unique and tamper-proof product IDs on the blockchain, we establish an immutable record of product information, guaranteeing authenticity and traceability.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24" id="features">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Everything you need</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/55">
          Experience the future of product verification with our app, built on the foundation of blockchain technology.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:gap-16">
          {features.map(({title, description}) => (
            <Feature title={title} description={description} key={title} />
          )) }
        </div>
      </div>
    </div>
  );
};
