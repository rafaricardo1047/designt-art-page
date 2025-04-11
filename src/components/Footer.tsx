"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const footerLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacypolicy", label: "Privacy Policy" },
  ];

  const serviceLinks = [
    { href: "/website-design", label: "Website Design" },
    { href: "/ecommerce", label: "eCommerce" },
    { href: "/seo", label: "SEO" },
    { href: "/branding", label: "Branding" },
    { href: "/social-media", label: "Social Media" },
    { href: "/photography", label: "Brand Photography" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/elevatedigitaldesigns/?hl=en",
      icon: "https://ext.same-assets.com/3290845516/3166858548.png",
      label: "Instagram"
    },
    {
      href: "https://www.facebook.com/ElevateDigitalDesign/",
      icon: "https://ext.same-assets.com/3290845516/2045197541.png",
      label: "Facebook"
    }
  ];

  return (
    <footer className="bg-[#657769] text-white">
      <div className="container-custom py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Tagline */}
          <div className="md:max-w-xs">
            <div className="mb-4">
              <h3 className="text-lg uppercase font-medium mb-2">DESIGNED TO ENGAGE,</h3>
              <h3 className="text-lg uppercase font-medium">CREATED IN HOUSE.</h3>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-2">
            {footerLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Hidden on small screens - Full menu */}
        <div className="hidden md:flex flex-wrap mt-10 gap-x-10 gap-y-4">
          <div>
            <Link href="/" className="block mb-2 hover:underline">Home</Link>
          </div>
          <div>
            <Link href="/about" className="block mb-2 hover:underline">About</Link>
          </div>
          <div>
            <span className="block mb-2">Our Services</span>
            <div className="pl-4 space-y-1">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Link href="/our-work" className="block mb-2 hover:underline">Our Work</Link>
          </div>
          <div>
            <Link href="/contact" className="block mb-2 hover:underline">Contact</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10">
          <p className="text-sm">© Elevate Digital Designs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
