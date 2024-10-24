import appScreen from "../assets/images/app-screen.png";
import Image from "next/image"
export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] py-24 text-center sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold sm:text-6xl tracking-tighter ">Intuitive interface</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.
          </p>
        </div>
        <Image 
        src={appScreen}
        alt="The Product screenshot"
        className="mt-14 mx-auto"
        />
      </div>
    </div>
  );
};
