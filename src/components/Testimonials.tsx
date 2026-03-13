"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "אורן אשכנזי",
    text: "טל התקין לנו עמדת טעינה לרכב חשמלי. הגיע בזמן שנקבע, הסביר הכל לפני שהתחיל, ועבד בסדר ובניקיון מלא. מחיר הוגן וללא הפתעות. ממליץ בחום.",
    initial: "א",
    location: "רעננה"
  },
  {
    name: "רון כהן",
    text: "פתר תקלה בלוח החשמל שחשמלאים אחרים לא הצליחו לאתר. הגיע תוך שעה, אבחן במהירות ותיקן במקום. מקצועי, אמין, ומחיר שקוף מראש.",
    initial: "ר",
    location: "הרצליה"
  },
  {
    name: "שחר בן חיים",
    text: "עבודה נקייה ומסודרת, בדיוק כמו שהובטח. טל שדרג את לוח החשמל אצלנו ובנה תשתית חדשה לחדר ילדים. מרוצים מאוד מהתוצאה.",
    initial: "ש",
    location: "כפר סבא"
  },
  {
    name: "מיכל לוי",
    text: "ממליצה מאוד! טל הגיע לתקלת חשמל דחופה בשעה מאוחרת בלילה — תוך פחות מ-40 דקות. מקצועי, רגוע ויעיל. שירות ברמה אחרת.",
    initial: "מ",
    location: "נתניה"
  },
  {
    name: "דני שפירא",
    text: "ביקשתי הצעת מחיר להוספת שקעים ותאורה בסלון — קיבלתי מחיר הוגן ותיאום לאותו שבוע. העבודה הסתיימה יום אחד, הכל מסודר ומדויק.",
    initial: "ד",
    location: "הוד השרון"
  },
  {
    name: "יעל אברהם",
    text: "טל הפך לחשמלאי הקבוע שלנו. כבר שלוש עבודות ביתיות ובכל פעם אותו שירות מעולה: מגיע בזמן, מתמחר בהגינות, ועובד נקי.",
    initial: "י",
    location: "רעננה"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-surface p-8 rounded-card border border-white/5 relative group hover:border-accent/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-white text-[17px] mb-8 leading-relaxed italic opacity-90">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent text-black rounded-full flex items-center justify-center font-bold text-sm">
                  {t.initial}
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-white/40">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
