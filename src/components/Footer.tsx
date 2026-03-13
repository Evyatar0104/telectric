"use client";

import { Zap, Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="py-12 bg-surface border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Right: Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Zap className="text-black" fill="currentColor" size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter leading-none text-white">T-ELECTRIC</span>
              <span className="text-[9px] text-accent font-bold uppercase tracking-widest leading-none">
                טל חשמל
              </span>
            </div>
          </div>

          {/* Center: Copyright */}
          <div className="text-muted text-sm font-medium">
            כל הזכויות שמורות לטל חשמל 2026
          </div>

          {/* Left: Contact */}
          <div className="flex items-center gap-6 text-white/60">
            <a href="tel:053-5250335" className="hover:text-white transition-colors">
              <Phone size={20} />
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=9720535250335&text=היי טל" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <WhatsAppIcon size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
