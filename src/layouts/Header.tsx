import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-30 w-full bg-white px-2 py-4 shadow-sm sm:px-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-extrabold text-red-600 ">
              HuongNHDH
            </span>
          </Link>
          <div className="flex items-center space-x-1">
            {/* DESKTOP menu */}
            <ul className="hidden space-x-2 md:inline-flex">
              <li>
                <Link
                  href="/"
                  className="rounded px-4 py-2 font-semibold text-gray-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="rounded px-4 py-2 font-semibold text-gray-600"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="rounded px-4 py-2 font-semibold text-gray-600"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="rounded px-4 py-2 font-semibold text-gray-600"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="block md:hidden">
              {/* HAMBEGER button */}
              <button
                className="relative flex h-14 w-14 items-center rounded bg-red-600 focus:outline-none"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <div className="absolute left-6 top-1/2 block w-5   -translate-x-1/2  -translate-y-1/2">
                  <span
                    className={`absolute block h-0.5 w-7 bg-current text-white transition duration-500 ease-in-out ${
                      open ? 'rotate-45' : ' -translate-y-1.5'
                    }`}
                  ></span>
                  <span
                    className={`absolute block  h-0.5 w-5 bg-current text-white  transition duration-500 ease-in-out ${
                      open ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span
                    className={`absolute block  h-0.5 w-7 bg-current text-white transition  duration-500 ease-in-out ${
                      open ? '-rotate-45' : ' translate-y-1.5'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
        {/* HAMBEGER menu */}
        <div
          className={`transition duration-500 ease-in-out ${
            open ? '' : 'hidden'
          } md:hidden`}
        >
          <ul className="h-screen space-y-2">
            <li>
              <Link
                href="#"
                className="rounded px-4 py-2 font-semibold text-gray-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="rounded px-4 py-2 font-semibold text-gray-600"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="rounded px-4 py-2 font-semibold text-gray-600"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="rounded px-4 py-2 font-semibold text-gray-600"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
