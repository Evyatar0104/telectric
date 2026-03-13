"use client";

import { useEffect, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://api.whatsapp.com/send?phone=9720535250335&text=היי טל, ראיתי את האתר שלך ורוצה לשמוע פרטים"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-[60] w-16 h-16 bg-accent text-black rounded-full md:hidden flex items-center justify-center shadow-lg hover:shadow-accent/20 transition-shadow group"
          aria-label="Contact on WhatsApp"
        >
          <WhatsAppIcon size={32} />
          <span className="absolute right-full mr-3 bg-white text-black px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            צריך חשמלאי? שלח הודעה
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
