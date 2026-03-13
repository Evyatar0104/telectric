"use client";

import { Zap, Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const footerLinks = [
    { name: "שירותים", href: "#services" },
    { name: "אודות", href: "#about" },
    { name: "המלצות", href: "#testimonials" },
    { name: "צור קשר", href: "#contact" },
  ];

  return (
    <footer className="py-16 bg-surface border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-right" dir="rtl">
          
          {/* Right Column: Logo & Tagline */}
          <div className="flex flex-col items-start md:items-start text-right">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Zap className="text-black" fill="currentColor" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none text-white">T-ELECTRIC</span>
                <span className="text-[10px] text-accent font-bold uppercase tracking-widest leading-none">
                  טל חשמל
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm font-medium">
              טל חשמלאי מוסמך - פתרונות חשמל מתקדמים לבית ולעסק.
            </p>
          </div>

          {/* Center Column: Quick Links */}
          <div className="flex flex-col items-start text-right">
            <h4 className="text-white font-bold mb-6 border-b-2 border-accent/30 pb-1">ניווט מהיר</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-white/70 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Left Column: Contact Info */}
          <div className="flex flex-col items-start text-right">
            <h4 className="text-white font-bold mb-6 border-b-2 border-accent/30 pb-1">צרו קשר</h4>
            <div className="flex flex-col gap-4 w-full">
              <a 
                href="tel:053-5250335" 
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm font-bold"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone size={16} className="text-accent" />
                </div>
                053-5250335
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=9720535250335&text=היי טל" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm font-bold"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <WhatsAppIcon size={16} className="text-accent" />
                </div>
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-white/60 text-sm font-medium">
            © 2026 טל חשמל — כל הזכויות שמורות
          </p>
        </div>
      </div>
    </footer>
  );
}
