"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, Zap } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "שירותים", href: "#services" },
    { name: "עלינו", href: "#about" },
    { name: "המלצות", href: "#testimonials" },
    { name: "צור קשר", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background py-3 border-b border-surface" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Right side: Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Zap className="text-black" fill="currentColor" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">T-ELECTRIC</span>
              <span className="text-[10px] text-accent font-bold uppercase tracking-widest leading-none">
                טל חשמלאי מוסמך
              </span>
            </div>
          </div>

          {/* Center: Desktop Nav (Hidden as per request, but usually good to have. User didn't specify links in navbar, but asked for "Logo right" and "Left side: buttons". I'll stick to that but keep it clean) */}
          
          {/* Left side: Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:053-5250335"
              className="px-5 py-2.5 border border-white/20 rounded-button text-sm font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              053-5250335
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=9720535250335&text=היי טל, ראיתי את האתר שלך ורוצה לשמוע פרטים"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-accent text-black rounded-button text-sm font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-8 items-center py-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-black text-white hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <hr className="w-full border-white/10" />

              <a
                href="tel:053-5250335"
                className="w-full py-4 text-center border border-white/20 rounded-button text-lg font-bold flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={20} />
                053-5250335
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=9720535250335&text=היי טל, ראיתי את האתר שלך ורוצה לשמוע פרטים"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 text-center bg-accent text-black rounded-button text-lg font-bold flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <WhatsAppIcon size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
