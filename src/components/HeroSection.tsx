import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { TerminalWindow } from "./TerminalWindow";

const spring = { type: "spring", stiffness: 300, damping: 30 };

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-4 py-1.5 mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-success animate-pulse-glow" />
              <span className="font-mono text-xs text-muted-foreground">v2.0 — Новый движок парсинга</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-6">
              Масштабируй свою
              <br />
              <span className="text-gradient-primary">Telegram-империю</span>
              <br />
              на автопилоте
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed" style={{ textWrap: "pretty" as any }}>
              Высокопроизводительный парсер контента для скорости, точности и максимального ROI. Без воды — только данные.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://tgcparser.ru/info"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
                Начать парсинг
              </motion.a>
              <motion.a
                href="https://t.me/ru_tgcparser"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-accent px-6 py-3 font-semibold text-foreground transition-colors hover:border-muted-foreground"
              >
                Telegram-канал
              </motion.a>
            </div>
          </motion.div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 0.3 }}
          >
            <TerminalWindow />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
