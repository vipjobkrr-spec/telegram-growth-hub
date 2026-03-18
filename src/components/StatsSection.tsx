import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50000, suffix: "+", label: "Постов обработано", format: true },
  { value: 2500, suffix: "+", label: "Активных пользователей", format: true },
  { value: 98.7, suffix: "%", label: "Уникализация AI", format: false, decimals: 1 },
  { value: 24, suffix: "/7", label: "Мониторинг каналов", format: false },
];

const CountUp = ({ end, suffix, format, decimals = 0, duration = 2 }: { end: number; suffix: string; format: boolean; decimals?: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  const display = decimals > 0
    ? count.toFixed(decimals)
    : format
      ? Math.floor(count).toLocaleString("ru-RU")
      : Math.floor(count).toString();

  return <span ref={ref}>{display}{suffix}</span>;
};

export const StatsSection = () => {
  return (
    <section className="py-12 sm:py-20 border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-primary mb-1 sm:mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} format={stat.format} decimals={stat.decimals} />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
