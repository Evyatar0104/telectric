"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            יש תקלה? <span className="text-accent underline decoration-4 underline-offset-10">אני מגיע.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 font-bold uppercase tracking-widest">
            זמין 24 שעות ביממה, 7 ימים בשבוע.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=9720535250335&text=היי טל, ראיתי את האתר שלך ורוצה לשמוע פרטים"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-accent text-black px-12 py-6 rounded-button text-2xl font-black hover:bg-yellow-400 hover:scale-105 transition-all group"
          >
            <WhatsAppIcon size={32} />
            שלח לי WhatsApp
            <ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
