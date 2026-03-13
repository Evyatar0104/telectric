"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Settings, 
  Lightbulb, 
  Cpu, 
  Car, 
  AlertTriangle 
} from "lucide-react";

const services = [
  {
    title: "עבודות חשמל כלליות",
    description: "פתרון לכל צורך — משקעים נוספים ועד תשתיות מלאות.",
    icon: Zap,
  },
  {
    title: "לוחות חשמל ותקלות",
    description: "איתור ותיקון קצרים, החלפת מפסקים ושדרוג לוחות.",
    icon: Settings,
  },
  {
    title: "תאורה ועיצוב אור",
    description: "תכנון והתקנת גופי תאורה מעוצבים לבית ולגינה.",
    icon: Lightbulb,
  },
  {
    title: "חשמל חכם",
    description: "הפיכת הבית לחכם עם שליטה מרחוק ואוטומציה מלאה.",
    icon: Cpu,
  },
  {
    title: "עמדות טעינה לרכב",
    description: "התקנה בטוחה ותקנית של עמדות טעינה לכל סוגי הרכב.",
    icon: Car,
  },
  {
    title: "חירום 24 שעות",
    description: "מענה מהיר לכל תקלת חשמל דחופה, גם באמצע הלילה.",
    icon: AlertTriangle,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.15 }}
           className="mb-16 text-right"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            מה אנחנו עושים
          </h2>
          <div className="w-20 h-1.5 bg-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ 
                delay: index * 0.08,
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(245, 196, 0, 0.15)"
              }}
              className={`bg-surface p-8 border border-accent/15 rounded-card flex flex-col items-start text-right group transition-all duration-200 hover:border-accent ${
                service.title === "חירום 24 שעות" ? "border-accent/35" : ""
              }`}
            >
              <div className="mb-6 p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all duration-200">
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.15, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.08) + 0.3, duration: 0.3 }}
                  className="group-hover:scale-[1.12] transition-transform duration-200"
                >
                  <service.icon size={32} className="text-accent" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
