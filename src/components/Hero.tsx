"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, Zap, Clock } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="חשמלאי מוסמך בעבודה"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65 z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-right">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mr-0 ml-auto"
        >
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-bold mb-6">
            חשמלאי מוסמך | זמין 24 שעות
          </span>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
            חשמל מקצועי. <br />
            מחיר הוגן. <br />
            <span className="relative inline-block text-accent">
              בלי קיצורי דרך.
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-2 right-0 h-1.5 bg-accent rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-xl mr-0 ml-auto mb-10 leading-relaxed font-medium">
            טל — חשמלאי מוסמך באזור השרון והמרכז. מגיע בזמן, עובד נקי, ומתמחר בהגינות.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-start">
            <a
              href="https://api.whatsapp.com/send?phone=9720535250335&text=היי טל, ראיתי את האתר שלך ורוצה לשמוע פרטים"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-black rounded-button text-lg font-black hover:bg-yellow-400 transition-all flex items-center justify-center gap-3"
            >
              <WhatsAppIcon size={24} />
              דבר איתי ב-WhatsApp
            </a>
            <a
              href="tel:053-5250335"
              className="px-8 py-4 border-2 border-white text-white rounded-button text-lg font-black hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
            >
              <Phone />
              053-5250335
            </a>
          </div>

          <div className="flex flex-wrap gap-6 justify-start items-center text-white/90">
            {[
              { icon: Zap, text: "ייעוץ ראשוני חינם" },
              { icon: Clock, text: "זמין 24 שעות" },
              { icon: CheckCircle2, text: "מחיר שקוף מראש" }
            ].map((badge, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.8 + (index * 0.15), 
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="flex items-center gap-2 text-sm font-bold bg-white/5 py-2 px-4 rounded-full border border-white/10"
              >
                <badge.icon size={16} className="text-accent" />
                {badge.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom - Scroll Indicator (Optional but nice) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
