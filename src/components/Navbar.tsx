'use client'
import Image from 'next/image';
import logoImage from '../assets/images/logosaas.png';
import MenuIcon from '../assets/icons/menu.svg';
import CloseIcon from '../assets/icons/minus.svg';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !((event.target as Element).closest('.menu-icon'))
      ) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between relative">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgb(252,_214,_255,_0.7),rgb(41,_216,_255,_0.7),rgb(255,_253,_128,_0.7),rgb(248,_154,_191,_0.7),rgb(252,_214,_255,_0.7))] blur-md"></div>
            <Image
              src={logoImage}
              alt="Logo"
              className="h-12 w-12 relative"
            />
          </div>

          {/* Menu Icon (only on small screens) */}
          <div
            className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden menu-icon"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <CloseIcon className="text-white" />
            ) : (
              <MenuIcon className="text-white" />
            )}
          </div>

          {/* Navigation (visible on large screens) */}
          <nav className="hidden sm:flex gap-6 items-center">
            <Link
              href="#faq"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </Link>
            <Link
              href="#features"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </Link>
            <Link href="/login">
              <button className="bg-white py-2 px-4 rounded-lg">
                Login
              </button>
            </Link>
          </nav>

          {/* Sidebar (only on small screens) */}
          <div
            ref={sidebarRef}
            className={` container absolute top-16 right-0 max-w-auto bg-black transform transition-transform duration-300 ease-in-out z-10 ${
              isNavOpen ? 'opacity-90 translate-x-0' : 'opacity-0 -translate-x-full'
            } sm:hidden`}
          >
            <nav className="flex flex-col gap-6 items-center py-10 px-4">
              <Link
                href="#faq"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                About
              </Link>
              <Link
                href="#features"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Features
              </Link>
              <Link href="/login">
                <button className="bg-white py-2 px-4 rounded-lg">
                  Login
                </button>
              </Link>
            </nav>
          </div>
        </div>
        
      </div>
    </div>
  );
};

