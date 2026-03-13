"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.03, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
          >
            יש תקלה? <span className="relative inline-block text-accent">
              אני מגיע.
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-2 right-0 h-2 bg-accent rounded-full"
              />
            </span>
          </motion.h2>

          <p className="text-xl md:text-2xl text-white/70 mb-12 font-bold uppercase tracking-widest">
            זמין 24 שעות ביממה, 7 ימים בשבוע.
          </p>

          <div className="flex flex-col items-center gap-6">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href="https://api.whatsapp.com/send?phone=9720535250335&text=היי טל, ראיתי את האתר שלך ורוצה לשמוע פרטים"
              target="_blank"
              rel="noopener noreferrer"
              className="wa-shake-btn inline-flex items-center gap-4 bg-accent text-black px-12 py-6 rounded-button text-2xl font-black hover:bg-yellow-400 hover:scale-105 transition-all group shadow-2xl shadow-accent/20"
            >
              <WhatsAppIcon size={32} />
              שלח לי WhatsApp
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={28} />
            </motion.a>

            <a
              href="tel:053-5250335"
              className="flex items-center gap-2 text-white/85 hover:text-white transition-colors text-[15px] font-medium"
            >
              <Phone size={18} />
              או התקשרו ישירות: 053-5250335
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
