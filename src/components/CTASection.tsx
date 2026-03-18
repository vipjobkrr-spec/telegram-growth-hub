import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-lg border border-border bg-card p-8 sm:p-12 md:p-16 overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/10 mb-6 sm:mb-8"
            >
              <Send className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-3 sm:mb-4">
              Готовы автоматизировать рост?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 px-2">
              Оставьте заявку — и мы покажем, как tgcparser решит именно вашу задачу.
            </p>

            {/* Capture form */}
            <div className="max-w-md mx-auto space-y-3">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full rounded-lg border border-border bg-accent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
              <input
                type="text"
                placeholder="@username в Telegram"
                className="w-full rounded-lg border border-border bg-accent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
              <motion.a
                href="https://tgcparser.ru/info"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                <Send className="h-4 w-4" />
                Оставить заявку
              </motion.a>
              <p className="text-xs text-muted-foreground">
                Ответим в Telegram в течение 15 минут
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
