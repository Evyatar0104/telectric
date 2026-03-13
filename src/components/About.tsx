"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Photo Column (Right in RTL) */}
          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-card">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent rounded-card -z-10 translate-x-2 translate-y-2 opacity-50" />
              <div className="absolute inset-0 bg-accent/10 rounded-card mix-blend-overlay z-10" />
              <Image
                src="/tal.png"
                alt="טל חשמלאי מוסמך"
                fill
                className="object-cover rounded-card shadow-2xl object-top"
                style={{ objectPosition: 'center 20%', transform: 'scale(1.8)', transformOrigin: 'top center' }}
              />
            </div>
          </motion.div>

          {/* Text Column (Left in RTL) */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1 text-right"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              קצת על <span className="text-accent">טל</span>
            </h2>
            <h3 className="text-xl font-bold text-white/90 mb-8">
              חשמלאי מוסמך ורישיון ממשלתי
            </h3>
            
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                נעים מאוד, אני טל. כחשמלאי מוסמך עם שנות ניסיון רבות בשטח, אני מאמין שחשמל זה לא רק &quot;לתקן תקלה&quot;, אלא שירות שחייב להיות מבוסס על ביטחון, שקיפות ומקצועיות ללא פשרות. עבורי, כל לקוח הוא עולם ומלואו, ואני מקפיד להגיע לכל עבודה עם חיוך ורצון אמיתי לעזור.
              </p>
              <p>
                אני דוגל בתמחור הוגן שנקבע מראש ובביצוע עבודה נקייה ומסודרת, בדיוק כמו שהייתי רוצה שיעשו אצלי בבית. בין אם מדובר בהתקנת עמדת טעינה, טיפול בלוח החשמל או תקלה דחופה באמצע הלילה — אני כאן כדי להבטיח שהבית שלכם יהיה בטוח ושתקבלו את השירות הטוב ביותר.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 justify-start">
              {[
                "רישיון ממשלתי מלא",
                "מבוטח במלואו",
                "ייעוץ ראשוני חינם"
              ].map((badge, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.3 }}
                  className="flex items-center gap-2 bg-background py-2 px-4 rounded-full border border-white/5 text-sm font-bold text-white shadow-sm"
                >
                  <CheckCircle2 size={16} className="text-accent" />
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
