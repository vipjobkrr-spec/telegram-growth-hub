import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Rocket } from "lucide-react";

const factoids = [
  { icon: Rocket, value: "2023", label: "Год запуска" },
  { icon: Code2, value: "v8.0", label: "Актуальная версия" },
  { icon: Cpu, value: "24/7", label: "Аптайм серверов" },
  { icon: Globe, value: "RU/CIS", label: "Основной рынок" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const AboutSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 border-y border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Text side */}
          <motion.div {...fadeIn} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-4 py-1.5 mb-5">
              <span className="font-mono text-xs text-muted-foreground">О проекте</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-4 sm:mb-6">
              Создано практиками
              <br />
              <span className="text-gradient-primary">для практиков</span>
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                tgcparser — это инструмент, который мы создали для себя, а потом открыли для всех.
                Наша команда ежедневно работает с Telegram-каналами и понимает боль ручного
                управления контентом.
              </p>
              <p>
                Мы объединили парсинг, ИИ-обработку и автопостинг в одном решении —
                чтобы владельцы каналов могли сфокусироваться на стратегии, а не на рутине.
              </p>
              <p>
                Сервис постоянно развивается: новые фильтры, интеграции и функции
                появляются каждый месяц на основе обратной связи от пользователей.
              </p>
            </div>
          </motion.div>

          {/* Factoids grid */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {factoids.map((f, i) => (
                <motion.div
                  key={f.label}
                  {...fadeIn}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className={`rounded-lg border border-border/60 ${['card-tg-blue', 'card-tg-teal', 'card-tg-purple', 'card-tg'][i]} card-tg-hover p-5 sm:p-6 text-center`}
                >
                  <f.icon className="h-5 w-5 text-primary mx-auto mb-3" />
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">{f.value}</div>
                  <div className="text-xs text-muted-foreground">{f.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
