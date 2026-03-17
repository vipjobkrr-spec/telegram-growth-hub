import { motion } from "framer-motion";
import { Send, ExternalLink } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-lg border border-border bg-card p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          
          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-8"
            >
              <Send className="h-7 w-7 text-primary" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              Готовы автоматизировать рост?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Присоединяйтесь к тысячам маркетологов, которые уже масштабируют свои Telegram-каналы на автопилоте.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://tgcparser.ru/info"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
                Начать бесплатно
              </motion.a>
              <motion.a
                href="https://tgcparser.ru/vc"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-accent px-8 py-3.5 font-semibold text-foreground transition-colors hover:border-muted-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Отзывы на VC.ru
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
