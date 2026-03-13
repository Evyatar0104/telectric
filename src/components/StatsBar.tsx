"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  isDecimal?: boolean;
}

function Counter({ end, suffix = "", duration = 2, isDecimal = false }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // If it's a decimal, we animate to end * 10 and then divide by 10
        const target = isDecimal ? end * 10 : end;
        setCount(Math.floor(progress * target));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration, isDecimal]);

  const displayValue = isDecimal ? (count / 10).toFixed(1) : count;

  return (
    <span ref={ref} className="inline-flex flex-row-reverse items-baseline" dir="ltr">
      <span>{suffix}</span>
      <span>{displayValue}</span>
    </span>
  );
}

export default function StatsBar() {
  const stats = [
    { number: 500, suffix: "+", label: "עבודות שבוצעו" },
    { number: 24, suffix: "/7", label: "זמינות" },
    { number: 4.9, suffix: "★", label: "דירוג ממוצע", isDecimal: true },
    { number: 10, suffix: "+", label: "שנות ניסיון" },
  ];

  return (
    <section className="bg-surface py-16 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-accent mb-2 tabular-nums">
                <Counter end={stat.number} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              </div>
              <div className="text-white font-bold text-sm md:text-base uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

