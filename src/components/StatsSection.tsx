import { motion } from "framer-motion";

const stats = [
  { value: "50K+", label: "Постов обработано" },
  { value: "2,500+", label: "Активных пользователей" },
  { value: "98.7%", label: "Уникализация AI" },
  { value: "24/7", label: "Мониторинг каналов" },
];

export const StatsSection = () => {
  return (
    <section className="py-20 border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
