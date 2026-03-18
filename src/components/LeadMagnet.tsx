import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const LeadMagnet = () => {
  return (
    <section className="py-16 sm:py-24 border-y border-border">
      <div className="container">
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5 }}
          className="relative rounded-lg border border-primary/20 bg-card p-8 sm:p-12 md:p-16 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/5 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 mb-5">
                <Zap className="h-3.5 w-3.5 text-primary" />
                <span className="font-mono text-xs text-primary">Быстрый расчёт</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-3 sm:mb-4">
                Узнайте потенциал
                <br />
                <span className="text-gradient-primary">вашей ниши за 30 секунд</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                Введите тематику или ссылку на канал — и мы покажем, сколько контента
                и целевой аудитории доступно для парсинга прямо сейчас.
              </p>
              <ul className="space-y-2.5 text-sm text-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success shrink-0" />
                  Количество доступных каналов по теме
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success shrink-0" />
                  Объём контента для парсинга в сутки
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success shrink-0" />
                  Потенциальный охват аудитории
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-accent/50 p-6 sm:p-8">
              <h3 className="font-semibold text-foreground mb-4">Быстрый расчёт</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Ваша ниша / тематика</label>
                  <input
                    type="text"
                    placeholder="Например: криптовалюта, маркетинг, IT"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Ссылка на ваш канал (опционально)</label>
                  <input
                    type="text"
                    placeholder="https://t.me/your_channel"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
                <motion.a
                  href="https://tgcparser.ru/info"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
                >
                  Рассчитать потенциал
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
                <p className="text-xs text-muted-foreground text-center">
                  Бесплатно · Без регистрации · Результат за 30 секунд
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
