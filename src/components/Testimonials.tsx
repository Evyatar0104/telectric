"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "אורן אשכנזי",
    text: "עבודה מקצועית כמו תמיד!",
    initial: "א",
  },
  {
    name: "רון כהן",
    text: "פתר תקלה במהירות ובמחיר הוגן מאוד.",
    initial: "ר",
  },
  {
    name: "שחר בן חיים",
    text: "אדיבים מאוד, עבודה נקייה ומקצועית, התקין עמדת טעינה לרכב.",
    initial: "ש",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            מה הלקוחות אומרים
          </h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface p-8 rounded-card border border-white/5 relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-white text-lg mb-8 leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent text-black rounded-full flex items-center justify-center font-bold text-sm">
                  {t.initial}
                </div>
                <div className="font-bold text-white">{t.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
