import Image from 'next/image';
import logoImage from '../assets/images/logosaas.png';
import MenuIcon from '../assets/icons/menu.svg';
import Link from 'next/link';

export const Navbar = () => {
  return(
  <div className="bg-black">
    <div className="px-4">
      <div className="py-4 flex items-center justify-between">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgb(252,_214,_255,_0.7),rgb(41,_216,_255,_0.7),rgb(255,_253,_128,_0.7),rgb(248,_154,_191,_0.7),rgb(252,_214,_255,_0.7))] blur-md"></div>
            <Image 
              src={logoImage} 
              alt="Logo" 
              className="h-12 w-12 relative" 
            />
        </div>
        <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
          <MenuIcon className="text-white"/>
        </div>
        <nav className="flex gap-6 items-center hidden sm:flex">
            <Link href="#faq" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</Link>
            <Link href="#features" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</Link>
            {/* <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">customers</a> */}
            <Link href="/login"> 
              <button className="bg-white py-2 px-4 rounded-lg">Login</button>
            </Link>
        </nav>
      </div>
    </div>
  </div>
  );
};
