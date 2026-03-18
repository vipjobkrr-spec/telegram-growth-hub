import { motion } from "framer-motion";
import { Check, Send, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Старт",
    price: "990",
    period: "мес",
    description: "Для тестирования и небольших каналов",
    icon: Zap,
    features: [
      "До 5 источников парсинга",
      "Базовые фильтры контента",
      "1 канал для публикации",
      "Ручной запуск задач",
      "Telegram-поддержка",
    ],
    cta: "Начать",
    popular: false,
  },
  {
    name: "Про",
    price: "2 490",
    period: "мес",
    description: "Для активных маркетологов и арбитражников",
    icon: Star,
    features: [
      "До 50 источников парсинга",
      "ИИ-фильтры и рерайт",
      "До 10 каналов",
      "Автопилот 24/7",
      "Сбор аудитории и инвайтинг",
      "Аналитика эффективности",
      "Приоритетная поддержка",
    ],
    cta: "Выбрать Про",
    popular: true,
  },
  {
    name: "Бизнес",
    price: "6 990",
    period: "мес",
    description: "Для агентств и сетей каналов",
    icon: Send,
    features: [
      "Безлимит источников",
      "Продвинутый ИИ-рерайт",
      "Безлимит каналов",
      "Автопилот + расписание",
      "Массовый сбор аудитории",
      "Детальная аналитика",
      "API-доступ",
      "Персональный менеджер",
    ],
    cta: "Связаться",
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary mb-3">
            Тарифы
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-3 sm:mb-4">
            Выберите свой план
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto">
            Начните бесплатно — масштабируйтесь по мере роста
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: plan.popular ? 1.05 : 1.03 }}
                className={`group relative rounded-lg border p-6 sm:p-8 flex flex-col card-tg-hover cursor-default ${
                  plan.popular
                    ? "border-primary/40 card-tg-bright shadow-lg shadow-primary/5 scale-[1.02]"
                    : "border-border/60 card-tg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      <Star className="h-3 w-3 transition-transform duration-300 group-hover:rotate-45" />
                      Популярный
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                    {plan.price} ₽
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">/ {plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="https://tgcparser.ru/info"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.02 }}
                  className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border bg-accent text-foreground hover:border-muted-foreground"
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
