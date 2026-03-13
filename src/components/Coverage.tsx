"use client";

import { motion } from "framer-motion";

const cities = [
  "כפר סבא", "רעננה", "הוד השרון", "נתניה", "אבן יהודה", 
  "הרצליה", "תל אביב", "חולון", "ראשל\"צ", "והסביבה"
];

export default function Coverage() {
  return (
    <section className="py-16 bg-surface border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.15 }}
           className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            לאיפה אנחנו מגיעים?
          </h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto" dir="rtl">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.06,
                duration: 0.4,
                ease: "backOut"
              }}
              className="px-6 py-3 bg-accent text-black font-black rounded-full text-sm sm:text-base hover:scale-110 transition-transform cursor-default shadow-lg shadow-accent/10"
            >
              {city}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
