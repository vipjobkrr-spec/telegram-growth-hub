import { motion } from "framer-motion";
import { Send } from "lucide-react";
import RotatingEarth from "./ui/wireframe-dotted-globe";

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

export const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] sm:min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      
      <div className="container relative z-10 py-12 sm:py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-3 sm:px-4 py-1 sm:py-1.5 mb-5 sm:mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-success animate-pulse-glow" />
              <span className="font-mono text-[10px] sm:text-xs text-muted-foreground">v2.0 — Новый движок парсинга</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.95] mb-4 sm:mb-6">
              Масштабируй свою
              <br />
              <span className="text-gradient-primary">Telegram-империю</span>
              <br />
              на автопилоте
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mb-6 sm:mb-10 leading-relaxed" style={{ textWrap: "pretty" as any }}>
              Высокопроизводительный парсер контента для скорости, точности и максимального ROI. Без воды — только данные.
            </p>

            {/* Lead capture form */}
            <div className="flex flex-col gap-3 mb-6 sm:mb-0">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <input
                  type="text"
                  placeholder="Ваш @username или ссылка на канал"
                  className="flex-1 rounded-lg border border-border bg-accent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
                <motion.a
                  href="https://tgcparser.ru/info"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 text-sm sm:text-base whitespace-nowrap"
                >
                  <Send className="h-4 w-4" />
                  Начать парсинг
                </motion.a>
              </div>
              <p className="text-xs text-muted-foreground">
                Бесплатный старт — до 5 каналов без ограничений
              </p>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <motion.a
                href="https://t.me/ru_tgcparser"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Send className="h-3.5 w-3.5" />
                Telegram-канал
              </motion.a>
              <a
                href="https://tgcparser.ru/vc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Отзывы на VC.ru
              </a>
            </div>
          </motion.div>

          {/* Right — Globe */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <RotatingEarth width={520} height={520} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
