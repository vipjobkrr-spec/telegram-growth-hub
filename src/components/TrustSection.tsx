import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Алексей М.",
    role: "Владелец сети каналов",
    text: "Веду 12 каналов полностью на автопилоте. Экономлю 6+ часов в день. Окупился за первую неделю.",
    rating: 5,
  },
  {
    name: "Дарья К.",
    role: "Digital-маркетолог",
    text: "AI-фильтрация и рерайт — просто бомба. Контент выходит уникальным и в тему, без ручной правки.",
    rating: 5,
  },
  {
    name: "Игорь В.",
    role: "Предприниматель",
    text: "Нашли 200+ целевых лидов за первую неделю из тематических чатов. ROI в 15x — это реально.",
    rating: 5,
  },
];

const partners = [
  "VC.ru", "Kwork", "ChatGPT", "Telegram API",
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const TrustSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container">
        <motion.div {...fadeIn} transition={{ duration: 0.5 }} className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-3 sm:mb-4">
            Нам <span className="text-gradient-primary">доверяют</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-2">
            Отзывы реальных пользователей и партнёров сервиса
          </p>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              {...fadeIn}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-5 sm:p-6"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4">"{review.text}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners / integrations strip */}
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Интеграции:</span>
          {partners.map((p) => (
            <span key={p} className="text-sm sm:text-base font-semibold text-muted-foreground/60">{p}</span>
          ))}
        </motion.div>

        {/* VC.ru link */}
        <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-8">
          <a
            href="https://tgcparser.ru/vc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Все отзывы на VC.ru
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
