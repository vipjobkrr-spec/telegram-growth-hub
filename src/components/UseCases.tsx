import { motion } from "framer-motion";
import { Megaphone, Target, TrendingUp, ShieldCheck } from "lucide-react";

const cases = [
  {
    icon: Megaphone,
    title: "Ведение сети каналов",
    description: "Автоматический сбор, рерайт и публикация контента в несколько каналов одновременно — без ручного труда.",
    quote: "Веду 12 каналов на автомате уже 3 месяца",
  },
  {
    icon: Target,
    title: "Поиск лидов и клиентов",
    description: "Мониторинг тысяч чатов в реальном времени с AI-фильтрацией — находите потенциальных клиентов первыми.",
    quote: "Нашли 200+ целевых лидов за неделю",
  },
  {
    icon: TrendingUp,
    title: "Аналитика конкурентов",
    description: "Отслеживайте контент конкурентов, собирайте статистику по вовлечённости и находите лучшие идеи.",
    quote: "Отбираем топ-контент по ER автоматически",
  },
  {
    icon: ShieldCheck,
    title: "Защита контента",
    description: "Водяные знаки на фото, видео и анимации. Брендирование медиа для защиты авторских прав.",
    quote: "Все медиа с нашим логотипом автоматически",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const UseCases = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 border-y border-border">
      <div className="container">
        <motion.div {...fadeIn} transition={{ duration: 0.5 }} className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-3 sm:mb-4">
            Кейсы <span className="text-gradient-primary">использования</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-2">
            Как наши пользователи зарабатывают и растут с Telegram Content Parser
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {cases.map((c, i) => {
            const gradients = ['card-tg-blue', 'card-tg-teal', 'card-tg-purple', 'card-tg'];
            return (
            <motion.div
              key={c.title}
              {...fadeIn}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`group relative rounded-lg border border-border/60 ${gradients[i % gradients.length]} card-tg-hover p-6 sm:p-8 overflow-hidden cursor-default`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:w-48 group-hover:h-48 group-hover:bg-primary/10" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <c.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2 transition-colors duration-300 group-hover:text-primary">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.description}</p>
                <div className="flex items-start gap-2 pt-4 border-t border-border/60 transition-colors duration-300 group-hover:border-primary/30">
                  <span className="text-primary text-lg leading-none">"</span>
                  <p className="text-xs sm:text-sm text-foreground italic">{c.quote}</p>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
