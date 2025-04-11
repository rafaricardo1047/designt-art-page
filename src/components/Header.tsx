"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "#",
      label: "Our Services",
      dropdown: [
        { href: "/website-design", label: "Website Design" },
        { href: "/ecommerce", label: "eCommerce" },
        { href: "/seo", label: "SEO" },
        { href: "/branding", label: "Branding" },
        { href: "/social-media", label: "Social Media" },
        { href: "/photography", label: "Brand Photography" },
      ]
    },
    { href: "/our-work", label: "Our Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="https://ext.same-assets.com/2751894838/3783633550.svg"
                alt="Elevate Digital Designs"
                width={120}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <Link
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-primary transition-colors px-1 py-2"
                >
                  {link.label}
                </Link>

                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0">
                    <div className="py-1">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <div key={index}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  onClick={link.dropdown ? undefined : () => setIsOpen(false)}
                >
                  {link.label}
                </Link>

                {link.dropdown && (
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
