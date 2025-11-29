'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const countries = [
    { name: 'India', code: 'in' },
    { name: 'USA', code: 'us' },
    { name: 'UK', code: 'gb' },
    { name: 'Australia', code: 'au' },
    { name: 'Canada', code: 'ca' },
  ];

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Latest', href: '/#latest-news' },
    { label: 'Sports', href: '/#sports' },
    { label: 'Tech', href: '/#technology' },
    { label: 'Entertainment', href: '/#entertainment' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">

      {/* ----------------- TOP BAR (Hindustan style) ----------------- */}
      <div className="flex items-center justify-between max-w-10xl mx-auto h-16 px-4">

        {/* Left Menu Icon */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          <Menu className="h-6 w-6 text-red-700" />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-extrabold text-3xl text-red-700"></span>
          <span className="font-extrabold text-4xl tracking-tight text-red-800">
            हिन्दुस्तान News
          </span>
        </Link>

        {/* Right Utilities */}
        <div className="hidden md:flex items-center space-x-6 text-lg font-semibold text-gray-700">

          <Link href="#" className="hover:text-red-600">Photos</Link>
          <Link href="#" className="hover:text-red-600">Videos</Link>

          {/* City Select */}
          <div className="relative"
               onMouseEnter={() => setIsCountryOpen(true)}
               onMouseLeave={() => setIsCountryOpen(false)}>
            <div className="flex items-center gap-1 cursor-pointer hover:text-red-600">
              Country <ChevronDown size={16} />
            </div>

            {isCountryOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg border rounded z-40">
                {countries.map((c) => (
                  <Link
                    key={c.code}
                    href={`/?country=${c.code}`}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-red-700"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#" className="hover:text-red-600">E-Paper</Link>
          <Link href="#" className="hover:text-red-600">Sign In</Link>

          {/* Search box */}
          <div className="flex items-center border rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-sm"
            />
            <Search size={16} className="text-gray-500" />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ----------------- CATEGORY BAR ----------------- */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-xl mx-auto flex space-x-6 overflow-x-auto px-4 py-2 text-lg font-semibold ">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-900 hover:text-red-700 hover:border-red-700 pb-1 text-lg"
            >
              {item.label}
            </Link>
          ))}

        </div>
      </div>

      {/* ----------------- MOBILE MENU ----------------- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">

          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 border-t pt-3">
              <p className="font-bold mb-2">Select Country</p>
              {countries.map((c) => (
                <Link
                  key={c.code}
                  href={`/?country=${c.code}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
